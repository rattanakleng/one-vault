

//the file is use for checing if there is a token
const jwt = require('jsonwebtoken');
const config = require('config');

// everytime there is a middle ware has to call 'next' to proceed forward after done with req, res
module.exports = function(req, res, next) {
    // Get token from hearder
    // to test in postman 
    // in 'key' in 'head tab' type x-auth-token and 'value' pass in token get from result when loggin
    const token = req.header('x-auth-token');

    // Check if not token, apply to protected route
    //401 error unauthorize
    if (!token) {
        return res.status(401).json({ msg: 'No token, authorization denied' });
      }
    
      try {
        // compare token with config jwtSecret
        const decoded = jwt.verify(token, config.get('jwtSecret'));

        req.user = decoded.user;
        // call next to move on
        next();
    } catch (err) {
      res.status(401).json({ msg: 'Token is not valid' });
    }
  };
  

