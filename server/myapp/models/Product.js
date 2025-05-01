import mongoose from 'mongoose';
const { Schema } = mongoose;

const productSchema = new Schema({
  name: String,
  image: String,
  price: Number,
  description: String,
  category: String,
  stockQuantity: Number,
  createAt: Date,
});

const Product = mongoose.model('Product', productSchema);