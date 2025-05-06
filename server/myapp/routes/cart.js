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

    getCart();
});

router.put('/', async (req, res) => {
    const { productId, quantity, action} = req.body;
    const userId = req.session.userId;
    const cart = await Cart.findOne({ user: userId });

    if(!cart) {
        return res.status(404).json({ error: 'Cart not found' });
    }

    async function modifyCart() {
        async function saveCart() {
            try {
                await cart.save();
                res.status(200).json(cart);
            } catch(error) {
                console.error('Product was not saved with error:', error);
                res.status(500).json({ error: 'Failed to save cart'});
            }
        }

        try{
            const existingItem = cart.items.find((item) => item.product.toString() === productId);

            if(existingItem) {
                switch (true) {
                    case (action === 'increase' && quantity >= 0):
                        existingItem.quantity += quantity;
                        break;
                    
                    case (action === 'decrease' && quantity === 0):
                        const currentItemIndex = cart.items.findIndex((elem) => elem.product.toString() === productId);
                        cart.items.splice(currentItemIndex, 1);
                        break;

                    case (action === 'decrease'):
                        existingItem.quantity -= quantity;
                        break;
                }

            saveCart();

            } else {
                return res.status(404).json({ error: 'Item not found' });
            }
        } catch(err) {
            console.error({ error: 'Something went wrong', err});
            res.status(500).json({ error: 'Something went wrong' });
        }
    }

    modifyCart();
});

router.delete('/', async (req, res) => {
    async function deleteCart() {
        const userId = req.session.userId;
        const cart = await Cart.findOne({ userId });
    
        try{
            if(!cart) {
                return res.status(404).json({ error: 'Cart not found' });
            }

            cart.deleteOne({ user: { userId }}).then(() => {
                console.log('User deleted cart');
                res.status(200).json({ message: 'Cart deleted' });
            });

        } catch {

        }
    }
});

module.exports = router;
