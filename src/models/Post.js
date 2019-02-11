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
    },

    _comments: [{
        type: Schema.ObjectId,
        ref: 'Comment'
    }]

})

const populateCreator = function(next){
    this.populate({
        path: '_creator',
        select: 'username -_id'
    })
    next()
}

const populateComments = function(next){
    this.populate({
        path: '_comments',
        select: 'text _creator -_id',
        match: { isDeleted: false }
    })
    next()
}

postSchema.pre('find', populateCreator)
postSchema.pre('find', populateComments)

const Post = mongoose.model('Post', postSchema)

module.exports = {
    Post
}
