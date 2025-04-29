import mongoose from 'mongoose';
const { Schema } = mongoose;

const productSchema = new Schema({
  name: String,
  imageUrl: String,
  price: Number,
  description: String,
  category: String,
  stockQuantity: Number,
  createdDate: Date,
});