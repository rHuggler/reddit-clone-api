require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const { routes } = require('./routes')

const app = express()
const db = mongoose.connect('mongodb://mongodb:27017/redditCloneApi')

app.use('/', routes)

app.listen(process.env.PORT, () => {
    console.log(`Server running on http://localhost:${process.env.PORT}/`)
})

module.exports = {
    app,
    db
}
