const express = require('express');
const router = express.Router();

//import bcrypt
const bcrypt = require('bcryptjs');

// import middleware express validator
const { check, validationResult } = require('express-validator/check');

const User = require('../models/User');

//create post request

// @route POST api/users
// @desc Register a user
// @access Public
// '/' point to api/users by default
// adding express validator middleware
router.post('/', [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Please enter a password with 6 or more characters').isLength({ min: 6 })
],
    async (req, res) => {

        const errors = validationResult(req);
        // !errors.isEmpty() if there is error return 400 error message = bad request(user does not input correct data)
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        //create const store name, email, password from req.body
        const { name, email, password } = req.body;

        try {
            // Check if the user/username is already exist
            let user = await User.findOne();

            // If user already exist return error message
            if (user) {
                return res.status(400).json({ msg: 'User already exists' });
            }

            // If user does not exist create a new user but do not send to database yet
            user = new User({
                name,
                email,
                password
            });

            // Encrypt password with bcrypt before sending to db
            const salt = await bcrypt.genSalt(10);

            user.password = await bcrypt.hash(password, salt);

            await user.save();

            res.send('user save')

        } catch (err) {
            // catch error on server side
            console.log(err.message);
            res.status(500).send('Server Error');
        }
});

module.exports = router;

/*
//Widhtout express validator middleware
router.post('/', (req, res) => {
    //req.body throw the data receive from database
    //to make accept data as json we need to add code below sever.js
    //app.use(express.json({extended: false}));
    res.send(req.body);
});

module.exports = router;
*/
