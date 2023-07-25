import { model, Schema } from "express";

const cartCollection = "carts";

const cartSchema = new Schema({
  products: [
    {
      product: Number,
      quantity: Number,
    },
  ],
});

export const Cart = model(cartCollection, cartSchema);
