const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
  name: { type: String, required: true },
  imageUrl: String,
  price: { type: Number, required: true },
  description: String,
  category: String,
  stockQuantity: { type: Number, default: 0 },
  creation: Date,
});

const Product = mongoose.model('Product', productSchema);