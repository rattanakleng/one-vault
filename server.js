const express = require('express');
//setup express app
const app = express();

// add route 
app.get('/', (req, res) => res.json({msg: "Welcome to react"}));

// setup port 
const PORT = process.env.PORT || 5000;
// listen to port
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));