import { Router } from "express";
import { userModel } from "../models/user.model.js";
import userRouter from "./users.router.js";
// import productsRouter from "./products.router.js";
// import cartsRouter from "./carts.router.js";
// import realTimeRouter from "./realTimeProducts.router.js";

const router = Router();

// router
//   .get("/", async (req, res) => {
//     try {
//       let users = await userModel.find();
//       res.send({ result: "success", payload: users });
//     } catch (error) {
//       console.log(error);
//     }
//   })
//   .post("/", async (req, res) => {
//     const { first_name, last_name, email } = req.body;
//     if (!first_name || !last_name || !email)
//       return res.send({ status: "error", error: "Incomplete values" });
//     let result = await userModel.create({
//       first_name,
//       last_name,
//       email,
//     });
//     res.send({ status: "success", payload: result });
//   })
//   .put("/:uid", async (req, res) => {
//     let { uid } = req.params;
//     let userToReplace = req.body;
//     console.log(userToReplace);
//     if (
//       !userToReplace.first_name ||
//       !userToReplace.last_name ||
//       !userToReplace.email
//     )
//       return res.send({ status: "error", error: "Incomplete values" });
//     let result = await userModel.updateOne({ _id: uid }, userToReplace);
//     res.send({ status: "success", payload: result });
//   })
//   .delete("/:uid", async (req, res) => {
//     let { uid } = req.params;
//     let result = await userModel.deleteOne({ _id: uid });
//     res.send({ status: "success", payload: result });
//   });

router.use("/", userRouter);
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
