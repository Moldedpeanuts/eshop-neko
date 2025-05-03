const express = require('express');
const router = express.Router();
const user = require('../models/User');
const { comparePassword } = require('../utils/password');

router.post('/login', async(req, res) => {
    const { email, password } = req.body;
});