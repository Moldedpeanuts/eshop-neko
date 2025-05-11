const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { comparePassword } = require('../utils/password');

router.post('/', async (req, res) => {
    const {firstName, lastName, email, password} = req.body;
    const userExists = await User.findOne({ email });

    if(userExists) {
        return res.status(409).json({ error: 'Account already exists'});
    }

    async function createUser() {
        try {

        } catch {
            
        }
    }
});