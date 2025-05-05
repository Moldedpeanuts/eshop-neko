const express = require('express');
const router = express.Router();
const Cart = require('../models/Cart');
const User = require('../models/User');

router.post('/', async (req, res) => {
    const { productId, quantity} = req.body;
    const userId = req.session.userId;

    let cart = await Cart.findOne({ user: userId });

    if(!cart) {
        cart = await Cart.create({
            user: userId,
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

router.get('/', async (req, res) => {
    async function getCart() {
        try{
            const userId = req.session.userId;
            const cart = await Cart.findOne({ user: userId });
            res.status(200).json({ cart });
        } catch(err) {
            console.error('Cart not found', err);
            res.status(500).json({ error: 'Cart not found'});
        }
    }
});

module.exports = router;
