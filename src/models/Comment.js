const mongoose = require('mongoose')

const { Schema } = mongoose

const commentSchema = new Schema({

    text: {
        type: String,
        required: true
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

    _post: {
        type: Schema.ObjectId,
        ref: 'Post'
    }
})

const populateCreator = function(next) {
    this.populate({
        path: '_creator',
        select: 'username -_id'
    })
    next()
}

commentSchema.pre('find', populateCreator)

const Comment = mongoose.model('Comment', commentSchema)

module.exports = {
    Comment
}
