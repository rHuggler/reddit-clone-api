const express = require('express')

const routes = express.Router()

const { userController } = require('./controllers/userController')
const { postController } = require('./controllers/postController')

routes.post('/user', userController.post)
routes.post('/post', postController.post)

module.exports = {
    routes
}
