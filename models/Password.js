const mongoose = require('mongoose')

const PasswordSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
  },
  name: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
  },
  passwordValue: {
    type: String,
    required: true,
  },
  website: {
    type: String,
  },
  passwordHint: {
    type: String,
  },
  securityQuestion: {
    type: String,
  },
  securityAnswer: {
    type: String,
  },
  securityImage: {
    type: String,
  },
  other: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
})

module.exports = mongoose.model('password', PasswordSchema)
