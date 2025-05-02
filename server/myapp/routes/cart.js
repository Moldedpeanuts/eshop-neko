const express = require('express');
const router = express.Router();
const Cart = require('../models/Cart');
const jwt = require('jsonwebtoken');
const jwtSecret = process.env.JWT_SECRET;

router.post(async (req, res) => {
    const { productId, quantity} = req.body;
    let cart = await Cart.findOne();

    if(!cart) {
        cart = await Cart.create({
            items: [{ product: productId, quantity }],
        });
    }

    const existingItem = cart.items.find((item) => item.product.toString() === productId);

    existingItem ? existingItem.quantity += quantity : cart.items.push({ product: productId, quantity });

    async function saveCart() {
        try {
            await cart.save();
            res.status(200).json(cart);
        } catch(error) {
            console.error('Product was not saved with error:', error);
            res.status(500).json({ error: 'Failed to save cart'});
        }
    }

    saveCart();
});