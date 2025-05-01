const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

router.get('/', async (req, res) => {
    try {
        const products = await Product.find({});
        res.json(products);
    } catch(err) {
        res.status(500).json({ message: 'Something went wrong'});
    }
});

router.get('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const product = await Product.findById(id);
        if(!product) {
            res.status(404).json({ message: 'Product not found'});
        } else {
            res.json(product);
        }
    } catch {
        res.status(500).json({ message: 'Something went wrong'});
    }
});

module.exports = router;