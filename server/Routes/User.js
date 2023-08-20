const { Home, GetUsersBlogs, GetAllBlogs } = require('../Controllers/User')

const routes = require('express').Router()

routes.get('/home', Home)
routes.get('/blog/:id', GetUsersBlogs)
routes.get('/blogs', GetAllBlogs)


module.exports = routes