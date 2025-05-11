const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { comparePassword } = require('../utils/password');

router.post('/', async (req, res) => {
    const {firstName, lastName, email, password} = req.body;
});