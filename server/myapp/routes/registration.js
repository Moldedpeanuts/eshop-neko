const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/', async (req, res) => {
    const {firstName, lastName, email, password} = req.body;
    const userExists = await User.findOne({ email });

    if(userExists) {
        return res.status(409).json({ error: 'Account already exists. Please log in.'});
    }

    async function createAndSaveUser() {
        try {
            const newUser = new User({
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password
            });

            await newUser.save();
        } catch(err) {
            console.error('Something went wrong with user registration', err);
            res.status(500).json({ error: 'Something went wrong with user registration'});
        }
    }

    createAndSaveUser();
});

module.exports = router;