const bcrypt = require('bcrypt');
const Blogger = require('../Models/User');
const Blogs = require('../Models/Blogs');
const { default: mongoose } = require('mongoose');
const jwt = require('jsonwebtoken');

const SignUp = async (req, res, next) => {
    const { firstName, lastName, email, password } = req.body
    const hashPassword = await bcrypt.hash(password, 10);
    const newUser = new Blogger({
        firstName: firstName,
        lastName: lastName,
        password: hashPassword,
        email: email
    })
    try {
        const user = await newUser.save()
        delete user.password
        res.json(user)
    } catch (error) {
        res.status(400).json({
            error: true,
            message: error.toString()
        })
    }

}
const CreateBlog = async (req, res, next) => {
    const { user } = req.body
    if (!mongoose.Types.ObjectId.isValid(user))
        return res.json({
            error: true,
            message: "to create post you must have to pass user id"
        })
    const blog = new Blogs(req.body)
    try {
        const blogsaved = await blog.save()
        res.json(blogsaved)
    } catch (error) {
        res.status(400).json({
            error: true,
            message: error.toString()
        })
    }
}

const Login = async (req, res, next) => {
    const { email, password } = req.body
    try {
        const user = await Blogger.findOne({
            email: email
        }).select('email password');
        if (!user) {
            return res.status(400).json({
                isLogin: true,
                message: "invalid email"
            })
        }
        const isPasswordMatches = await bcrypt.compare(password, user.password)
        if (isPasswordMatches) {
            user.password = ""
            const jwtToken = await jwt.sign({ user }, process.env.SECRET, { expiresIn: 60 * 60 })
            console.log(jwtToken);
            return res.json({
                isLogin: true,
                token: jwtToken
            })
        }
        return res.status(400).json({
            error: true,
            message: "Email or password incorrect"
        })
    } catch (error) {
        console.log(error);
        res.status(400).json({
            error: true,
            message: error.toString()
        })
    }
}
module.exports = {
    SignUp: SignUp,
    CreateBlog: CreateBlog,
    Login: Login
}