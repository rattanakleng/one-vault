const express = require('express');
const router = express.Router();

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
], (req, res) => {

        const errors = validationResult(req);
        // !errors.isEmpty() if there is error return 400 error message = bad request(user does not input correct data)
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        res.send(req.body);
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
