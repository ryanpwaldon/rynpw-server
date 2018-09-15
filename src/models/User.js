const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  userName: {
    type: String,
    required: true
  },
  userAvatar: {
    type: String,
    required: true
  },
  accessLevel: {
    type: Number,
    default: 1
  },
  hash: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('User', userSchema)
