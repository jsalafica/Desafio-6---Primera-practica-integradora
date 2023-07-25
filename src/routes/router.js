import { Router } from "express";
import userRouter from "./users.router.js";
import productRouter from "./products.router.js";
// import productsRouter from "./products.router.js";
// import cartsRouter from "./carts.router.js";
// import realTimeRouter from "./realTimeProducts.router.js";

const router = Router();

router.use("/users", userRouter);
router.use("/products", productRouter);
// router.use("/api/products", productsRouter);
// router.use("/api/carts", cartsRouter);
// router.use("/realTimeProducts", realTimeRouter);

// router.use((req, res) => {
//   res.json({
//     error: -2,
//     desc: `Route ${req.path} method ${req.method} doesn't exist`,
//   });
// });

export default router;
