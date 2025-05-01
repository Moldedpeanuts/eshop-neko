const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

router.get('/', async (req, res) => {
    try {
        const products = await Product.find({});
        res.json(products);
    } catch(err) {
        res.status(500).json({ message: 'Something went wrong with getting all products'});
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
        res.status(500).json({ message: 'Something went wrong with getting product'});
    }
});

router.post('/', async (req, res) => {
    try {
        const request = req.body;
        const newItem = await Product.create(request);
        res.status(201).json(newItem);
    } catch {
        res.status(500).json({ message: 'Something went wrong with creating the product' });
    }   
});

router.put('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const update = req.body;
        const updatedProduct = await Product.findByIdAndUpdate(id, update, { new: true });
        res.status(200).json(updatedProduct);
    } catch {
        res.status(500).json({ message: 'Something went wrong with updating the product' });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const deletedItem = await Product.findByIdAndDelete(id);
        if (!deletedItem) {
            res.status(404).json({ message: 'Product not found' });
        } else {
            res.status(200).json({ message: 'Item deleted'});
        }
    } catch {
        res.status(500).json({ message: 'Something went wrong with deleting the item'});
    }
});

module.exports = router;