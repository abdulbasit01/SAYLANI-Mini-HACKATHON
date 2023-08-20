const { SignUp, CreateBlog, Login } = require('../Controllers/Admin')
const Authorization = require('../middlewares/Auth')
const routes = require('express').Router()

routes.post('/user/login', Login)
routes.post('/signup', SignUp)
routes.post('/user/create/blog', Authorization, CreateBlog)


module.exports = routes