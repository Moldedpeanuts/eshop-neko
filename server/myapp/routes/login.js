const express = require('express');
const router = express.Router();
const   User = require('../models/User');
const { comparePassword } = require('../utils/password');

router.post('/login', async(req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if(!user) return res.status(401).json({ error: 'Invalid email or password'});

        const passMatch = await comparePassword(password, user.password);
        if(passMatch) {
            res.status(200).json({ message: 'Login successful!'});
            req.session.userId = user._id;
        } else {
            res.status(401).json({ error: 'Invalid password'});
        }
    } catch(err) {
        res.status(500).json({ error: 'Internal server error'});
    }
});
