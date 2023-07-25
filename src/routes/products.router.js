import { Router } from "express";

import { productModel } from "../dao/models/product.model.js";

const router = Router();

router.route("/").get(async (req, res) => {
  try {
    let products = await productModel.find();
    res.send({ result: "success", payload: products });
  } catch (error) {
    console.log(error);
  }
});

export default router;
