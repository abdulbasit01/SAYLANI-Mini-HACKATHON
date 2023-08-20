const jwt = require('jsonwebtoken')
const Authorization = async (req, res, next) => {
    var token = req.headers && req.headers.authorization ? req.headers.authorization.split(' ')[1] : undefined;
    if (!token) {
        return res.json({
            error: false,
            message: "User not authorized"
        })
    }
    try {
        const jwtVerify = await jwt.verify(token, process.env.SECRET)
        if (!jwtVerify) {
            return res.json({
                error: false,
                message: "User not authorized"
            })
        }
        if (jwtVerify) {
            next()
        }

    } catch (error) {
        return res.json({
            error: error.toString(),
            isAuthorization: false
        })
    }
}

module.exports = Authorization