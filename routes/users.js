const express = require('express');
const router = express.Router();

//create post request

// @route POST api/users
// @desc Register a user
// @access Public
// '/' point to api/users by default
router.post('/', (req, res) => {
    res.send('Register a user');
});

module.exports = router;
