require('dotenv').config()

const express = require('express')

const app = express()

const { routes } = require('./routes')

app.use('/', routes)

app.listen(process.env.PORT, () => {
    console.log(`Server running on http://localhost:${process.env.PORT}/`)
})

module.exports = {
    app
}
