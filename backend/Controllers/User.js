const { default: mongoose } = require("mongoose")
const Blogs = require('../Models/Blogs');

const Home = (req, res, next) => {
    res.json({
        message: "hello world"
    })
}
const GetUsersBlogs = async (req, res, next) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id))
        return res.json({
            error: true,
            message: "to get post you must have to pass user id"
        })
    try {
        const blogs = await Blogs.find({ user: id })
        res.json(blogs)
    } catch (error) {
        res.status(400).json({
            error: true,
            message: error.toString()
        })
    }
}
const GetAllBlogs = async (req, res, next) => {
    try {
        const blogs = await Blogs.find()
        res.json(blogs)
    } catch (error) {
        res.status(400).json({
            error: true,
            message: error.toString()
        })
    }
}

module.exports = {
    Home: Home,
    GetUsersBlogs: GetUsersBlogs,
    GetAllBlogs: GetAllBlogs
}