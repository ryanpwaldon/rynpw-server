const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const User = require('../models/User')

module.exports = {

  async post (req, res) {
    console.log(req.body)
    const userName = req.body.userName
    const password = req.body.password
    const user = await User.findOne({ userName })
    if (!user) return res.status(404).send('User does not exist.')
    const passwordIsValid = await bcrypt.compare(password, user.hash)
    if (!passwordIsValid) return res.status(401).send({ auth: false, token: null })
    let token = jwt.sign({ id: user.id, accessLevel: user.accessLevel }, process.env.JWT_SECRET, { expiresIn: 86400 })
    res.status(200).json({ token, ...user.toObject() })
  }

}
