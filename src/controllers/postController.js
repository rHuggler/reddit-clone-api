const { Post } = require('../models/Post')

const postController = {
    post: (req, res) => {

        const {
            title,
            text,
            link,
            userId // remove this when you have authentication set-up
        } = req.body

        const post = new Post({
            title,
            text,
            link,
            _creator: userId
        })

        post.save()
            .then((newPost) => {
                res.status(200).send({
                    success: true,
                    data: newPost
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
    postController
}
