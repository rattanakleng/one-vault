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
            // Check if the user/username is already exist by comparing email
            //{email:email} can write in short form {email} because both side of colon are the same name
            let user = await User.findOne({email:email});

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

            user.save("user save");
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
                jwt.sign(payload, config.get('jwtSecrete'), {
                    // set expire in an hour/3600 second
                    expiresIn: 3600
                }, (err, token) => {
                        if (err) throw err;
                        res.json({ token });
                } )

            } catch (err) {
                // catch error on server side
                console.log(err.message);
                res.status(500).send('Server Error');
            }
        }    
    );

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







/*

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

            user.save("user save");
            //information send to web token
            // const payload = {
            //     user: {
            //         id: user.id
            //     }
            // }
            //setup jwt to use token
            //see'jswtSecret' in default.json
            //test with postman to see token
            //go to jwt.io and passvalue from postman to see data report
            //     jwt.sign(payload, config.get('jwtSecrete'), {
            //         // set expire in an hour/3600 second
            //         expiresIn: 3600
            //     }, (err, token) => {
            //             if (err) throw err;
            //             res.json({ token });
            //     } )

            // } catch (err) {
            //     // catch error on server side
            //     console.log(err.message);
            //     res.status(500).send('Server Error');
            // }
        }
    
        );

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
