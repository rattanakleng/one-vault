const express = require('express');
const connectDB = require('./config/db');
//setup express app
const app = express();

//Connect Database
connectDB();

// Init Middleware
app.use(express.json({extended: false}));


// add route 
app.get('/', (req, res) => res.json({msg: "Welcome to react"}));

// setup port 
const PORT = process.env.PORT || 5000;

// Define Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));

// listen to port
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));