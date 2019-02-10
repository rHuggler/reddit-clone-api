const express = require('express')

const routes = express.Router()

const { basicController } = require('./controllers/basicController')

routes.get('/', basicController.get)

module.exports = {
    routes
}
