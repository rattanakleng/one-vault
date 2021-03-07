// will have 4 routes CRUD
const express = require('express');
const router = express.Router();

//dependencies for secure middleware
const User = require('../models/User');
const Contact = require('../models/Contact');
const auth = require('../middleware/auth');
const {check, validationResult} = require('express-validator');


// @route GET api/contacts
// @desc Get all users contacts
// @access Private

router.get('/', auth, async (req, res) => {
    //mongoose code try, catch
    //need specific user from data base, find by id, and sort the most recent
    try {
        //search for a specific user from data base, find by id, and sort the most recent
        const contacts = await Contact.find({user: req.user.id}).sort({
            date: -1,
          });
        //convert the result to json
        res.json(contacts);
    } catch (err) {
        //console.error sprint specific error in console good for developing 
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route POST api/contacts
// @desc Add new contact
// @access Private

router.post('/',
    [auth,
        [
            check('name', 'Name is required')
                .not()
                .isEmpty()
        ]],
    
    async (req, res) => {
        //validate input file
    
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }

    //crete container store name, email, phone, type from user input
    const {name, email, phone, type} = req.body;

    try {

        // creat new object from const above 
        //user:req.user.id = logged in user id, we use it to link contacts and user collections
        //user:req.user.id know the id from user information via token provided by auth when user login
        const newContact = new Contact({
            name,
            email,
            phone,
            type,
            user: req.user.id,
          });

        // save contact from from newContact
        const contact = await newContact.save();

        //convert data JSON before send out db
        res.json(contact);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }
    
});

// @route PUT api/contacts/:id
// @desc Udate contacts
// @access Private

router.put('/:id', auth, async (req, res) => {
    //pull information from req.body
    const { name, email, phone, type } = req.body;

    //Build contact object
    // If name exist then add name property to contactFields object
    const contactFields = {};
    
  if (name) contactFields.name = name;
  if (email) contactFields.email = email;
  if (phone) contactFields.phone = phone;
  if (type) contactFields.type = type;

    //connect to database via Mongoose
    try {
        let contact = await Contact.findById(req.prapms.id);
        // Make sure contact is exist
        if (!contact) return res.status(404).json({ msg: "Contact noe found" });

        // Make sure user own the contact
        //contact.user.toString() is not string, so we have to covert to string
        if (contact.user.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'Not authorized' });
        }

        //Find contact and update with id, then set cotactField, 
        //{new: true} if one of the property does not exist create 1
        contact = await Contact.findByIdAndUpdate(
            req.params.id,
            { $set: contactFields },
            { new: true },
        );
            
        res.json(contact);
    } catch (err) {
        console.error(er.message);
        res.status(500).send('Server Error');
    }
});

// @route PUT api/contacts/:id
// @desc Delete contacts
// @access Private

router.delete('/:id', auth, async (req, res) => {
    try {
      let contact = await Contact.findById(req.params.id);
  
      if (!contact) return res.status(404).json({msg: 'Contact not found'});
  
      // Make sure user owns contact
      if (contact.user.toString() !== req.user.id) {
        return res.status(401).json({msg: 'Not authorized'});
      }
  
      await Contact.findByIdAndRemove(req.params.id);
  
      res.json({msg: 'Contact removed'});
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  });

module.exports = router