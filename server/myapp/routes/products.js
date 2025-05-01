const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

router.get('/', (req, res) => {
    res.send('Get all products');
})

module.exports = router;