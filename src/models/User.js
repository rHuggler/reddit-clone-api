const mongoose = require('mongoose')

const { Schema } = mongoose

const userSchema = new Schema({

    username: {
        type: String,
        required: true,
        minlength: [5, 'Username must be at least 5 characters']
    },

    password: {
        type: String,
        required: true,
        minlength: [8, 'Password must be at least 8 characters']
    },
})

const User = mongoose.model('User', userSchema)

module.exports = {
    User
}
