const mongoose = require('mongoose');
const { Schema } = mongoose;

const cartItemSchema = new Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true},
    quantity: { type: Number, default: 1},
});

const cartSchema = new Schema({
    items: [cartItemSchema]
});

module.exports = mongoose.model('Cart', cartSchema);