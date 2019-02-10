const express = require('express')

const routes = express.Router()

const { userController } = require('./controllers/userController')

routes.post('/user', userController.post)

module.exports = {
    routes
}
