const express = require('express');
const router = express.Router();

//There are two routes in auth, 1st get the logged user and 2nd get user auth and login user

// @route GET api/auth
// @desc Get logged in user
// @access Private
// '/' point to api/auths by default
router.get('/', (req, res) => {
    res.send('Get logged in user');
});

// @route POST api/auth
// @desc Auth user & get token
// @access Public
// '/' point to api/auths by default

router.post('/', (req, res) => {
    res.send('Log in user')
})

module.exports = router