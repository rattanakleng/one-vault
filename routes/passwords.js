const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const {check, validationResult} = require('express-validator');

const User = require('../models/User');
const Password = require("../models/Password");

// @route     GET api/passwords
// @desc      Get all users passwords
// @access    Private
router.get('/', auth, async (req, res) => {
  try {
    const passwords = await Password.find({user: req.user.id}).sort({
      date: -1,
    });
    res.json(passwords);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route     POST api/passwords
// @desc      Add new password
// @access    Private
router.post(
  '/',
  [
    auth,
    [
      check('name', 'Name is required')
        .not()
        .isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({errors: errors.array()});
    }

    const { name, userName, website, passwordValue, passwordHint, securityQuestion, securityAnswer, securityImage } = req.body;

    try {
      const newPassword = new Password({
        name,
        userName,
        website,
        passwordValue,
        passwordHint,
        securityQuestion,
        securityAnswer,
        securityImage,
        other,
        user: req.user.id
        
      });

      const password = await newPassword.save();

      res.json(password);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  },
);

// @route     PUT api/passwords/:id
// @desc      Update password
// @access    Private
router.put('/:id', auth, async (req, res) => {
  const { name, userName, website, passwordValue, passwordHint, securityQuestion, securityAnswer, securityImage, other } = req.body;

  // Build password object
  const passwordFields = {};
  if (name) passwordFields.name = name;
  if (userName) passwordFields.userName = userName;
  if (website) passwordFields.website = website;
  if (passwordValue) passwordFields.passwordValue = passwordValue;
  if (passwordHint) passwordFields.passwordHint = passwordHint;
  if (securityQuestion) passwordFields.securityQuestion = securityQuestion;
  if (securityAnswer) passwordFields.securityAnswer = securityAnswer;
  if (securityImage) passwordFields.securityImage = securityImage;
  if (other) passwordFields.other = other;

  try {
    let password = await Password.findById(req.params.id);

    if (!password) return res.status(404).json({msg: 'Password not found'});

    // Make sure user owns password
    if (password.user.toString() !== req.user.id) {
      return res.status(401).json({msg: 'Not authorized'});
    }

    password = await Password.findByIdAndUpdate(
      req.params.id,
      {$set: passwordFields},
      {new: true},
    );

    res.json(password);
  } catch (err) {
    console.error(er.message);
    res.status(500).send('Server Error');
  }
});

// @route     DELETE api/passwords/:id
// @desc      Delete password
// @access    Private
router.delete('/:id', auth, async (req, res) => {
  try {
    let password = await Password.findById(req.params.id);

    if (!password) return res.status(404).json({msg: 'Password not found'});

    // Make sure user owns password
    if (password.user.toString() !== req.user.id) {
      return res.status(401).json({msg: 'Not authorized'});
    }

    await Password.findByIdAndRemove(req.params.id);

    res.json({msg: 'Password removed'});
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
