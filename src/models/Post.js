const mongoose = require('mongoose')

const { Schema } = mongoose

const postSchema = new Schema({

    title: {
        type: String,
        required: true
    },

    link: {
        type: String
    },

    text: {
        type: String
    },

    isDeleted: {
        type: Boolean,
        default: false
    },

    createdAt: {
        type: Date,
        default: Date.now
    },

    _creator: {
        type: Schema.ObjectId,
        ref: 'User'
    }

})

const populateCreator = function(next){
    this.populate({
        path: '_creator',
        select: 'username -_id'
    })
    next()
}

postSchema.pre('find', populateCreator)

const Post = mongoose.model('Post', postSchema)

module.exports = {
    Post
}
