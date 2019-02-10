require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const { routes } = require('./routes')

const app = express()
const db = mongoose.connect('mongodb://localhost:27017/redditCloneApi', {useNewUrlParser: true})

app.use(bodyParser.json())
app.use('/api', routes)

app.listen(process.env.PORT, () => {
    console.log(`Server running on http://localhost:${process.env.PORT}/`)
})

module.exports = {
    app,
    db
}
