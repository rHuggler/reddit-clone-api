const express = require('express')

const routes = express.Router()

const { userController } = require('./controllers/userController')
const { postController } = require('./controllers/postController')
const { commentController } = require('./controllers/commentController')

routes.post('/user', userController.post)
routes.post('/post', postController.post)
routes.post('/comment', commentController.post)
routes.get('/post', postController.getAll)

module.exports = {
    routes
}
