const express = require('express');
const router = express.Router();

//import bcrypt
const bcrypt = require('bcryptjs');
// token
// import json web token
const jwt = require('jsonwebtoken');
// import config for jwt to access default.json
const config = require('config');
// import middleware express validator
const { check, validationResult } = require('express-validator/check');
//import middle to proteck route
const auth = require('../middleware/auth')


const User = require('../models/User');

//There are two routes in auth, 1st get the logged user and 2nd get user auth and login user

// @route GET api/auth
// @desc Get logged in user
// @access Private
// '/' point to api/auths by default
// this route is private and need to be protected so it require protected middleware "auth"
router.get('/', auth, async (req, res) => {
  try {
        //mongoose method to find user by id and take out password before send it to user
        const user = await User.findById(req.user.id).select('-password');
        res.json(user);
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }
    });

// @route POST api/auth
// @desc Auth user & get token
// @access Public
// '/' point to api/auths by default
// validate email and password with middleware
router.post(
    '/',
    [check('email', 'Please include a valid email').isEmail(),
    check('password', 'Password is required').exists(),
    ],
    async (req, res) => {
        const errors = validationResult(req);
        // !errors.isEmpty() if there is error return 400 error message = bad request(user does not input correct data)
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        //take email and password from req.body
        const { email, password } = req.body;

        try {
            let user = await User.findOne({ email });
            // check it the user input does not match the data return error
            if (!user) {
                return res.status(400).json({ msg: 'Invalid Email' });
            }
            // chek if password match
            //(password, user.password) password = user input, user.password= hash password in database

            const isMatch = await bcrypt.compare(password, user.password);

            if (!isMatch) {
                return res.status(400).json({ msg: 'Invalid Password' });
            }

            // if everything is ok
            //information send to web token
            const payload = {
                user: {
                    id: user.id
                }
            }

            //setup jwt to use token
            //see'jswtSecret' in default.json
            //test with postman to see token
            //go to jwt.io and passvalue from postman to see data report
            jwt.sign(payload, config.get('jwtSecret'), {
                // set expire in an hour/3600 second
                expiresIn: 3600
            }, (err, token) => {
                if (err) throw err;
                res.json({ token });
            })

        } catch (err) {
            // catch error on server side
            console.log(err.message);
            res.status(500).send('Server Error');
        }
    })

module.exports = router



