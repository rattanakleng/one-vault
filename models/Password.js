const mongoose = require('mongoose');

const PasswordSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users'
  },
  name: {
    type: String,
    required: true
  },
  userName: {
    type: String,
    required: true
  },
  website: {
    type: String,
  },
  passwordValue: {
    type: String,
    required: true
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
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('password', PasswordSchema);
