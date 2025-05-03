const express = require('express');
const router = express.Router();
const   User = require('../models/User');
const { comparePassword } = require('../utils/password');

router.post('/login', async(req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        const passMatch = await comparePassword(password, user.password);
        if(passMatch) {
            res.status(200).json({ message: 'Login successful!'});
        } else {
            res.send.json({ error: 'User was not found'});
        }
    } catch(err) {
        console.error('User not found with error:', err);
        res.status(500).json({ error: 'Internal server error'});
    }
});
