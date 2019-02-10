const { User } = require('../models/User')

const userController = {
    post: (req, res) => {
        const { username, password } = req.body

        const user = new User({
            username,
            password
        })

        user.save()
            .then((newUser) => {
                res.status(200).send({
                    success: true,
                    data: newUser
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
    userController
}
