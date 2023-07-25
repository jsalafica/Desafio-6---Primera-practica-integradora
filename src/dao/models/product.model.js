import { model, Schema } from "mongoose";

const productCollection = "products";

const productSchema = new Schema({
  title: String,
  description: String,
  price: Number,
  code: String,
  stock: Number,
  status: Boolean,
  category: String,
  thumbnails: String,
});

export const productModel = model(productCollection, productSchema);
