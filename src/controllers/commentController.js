const { Comment } = require('../models/Comment')
const { Post } = require('../models/Post')

const commentController = {
    post: (req, res) => {

        const {
            text,
            postId,
            userId
        } = req.body

        const comment = new Comment({
            text,
            _creator: userId,
            _post: postId
        })

        comment.save()
            .then((newComment) => {

                Post.findOneAndUpdate({
                    _id: postId
                }, {
                    $push: { '_comments': newComment._id }
                })
                    .then((post) => {
                        res.status(200).send({
                            success: true,
                            data: newComment,
                            post
                        })
                    })
            })
            .catch((err) => {
                res.status(500).send({
                    success: false,
                    message: err
                })
            })
    }
}

module.exports = {
    commentController
}
