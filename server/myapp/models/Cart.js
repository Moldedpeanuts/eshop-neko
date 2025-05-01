const mongoose = require('mongoose');
const { Schema } = mongoose;

const cartItemSchema = new Schema({
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true},
    quantity: { type: Number, default: 1},
});