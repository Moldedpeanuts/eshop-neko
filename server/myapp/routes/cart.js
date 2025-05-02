const express = require('express');
const router = express.Router();
const Cart = require('../models/Cart');

router.post(async (req, res) => {
    const { productId, quantity} = req.body;
    let cart = await Cart.findOne();

    if(!cart) {
        const cart = await Cart.create({
            items: [{ product: productId, quantity }],
        });
    }
});