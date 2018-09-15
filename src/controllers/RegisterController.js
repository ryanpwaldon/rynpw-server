const bcrypt = require('bcrypt')

const User = require('../models/User')

module.exports = {
  async post (req, res) {
    const userName = req.body.userName
    const userAvatar = req.body.userAvatar
    const accessLevel = req.body.accessLevel
    const password = req.body.password
    const hash = await bcrypt.hash(password, 10)
    const userAlreadyExists = await User.findOne({ userName })
    if (userAlreadyExists) return res.status(409).json({ error: 'User already exists.' })
    const user = new User({ userName, userAvatar, accessLevel, hash })
    user.save((err, user) => {
      if (err) return res.status(400).json(err)
      res.status(200).json(user)
    })
  }
}
