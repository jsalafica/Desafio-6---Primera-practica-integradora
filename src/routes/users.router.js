import { Router } from "express";
import { userModel } from "../dao/models/user.model.js";

const router = Router();

router
  .route("/")
  .get(async (req, res) => {
    try {
      let users = await userModel.find();
      res.send({ result: "success", payload: users });
    } catch (error) {
      console.log(error);
    }
  })
  .post(async (req, res) => {
    const { first_name, last_name, email } = req.body;
    if (!first_name || !last_name || !email)
      return res.send({ status: "error", error: "Incomplete values" });
    try {
      let result = await userModel.create({
        first_name,
        last_name,
        email,
      });
      res.send({ status: "success", payload: result });
    } catch (error) {
      console.log(error);
    }
  });

router
  .route("/:uid")
  .put(async (req, res) => {
    let { uid } = req.params;
    let userToReplace = req.body;
    if (
      !userToReplace.first_name ||
      !userToReplace.last_name ||
      !userToReplace.email
    )
      return res.send({ status: "error", error: "Incomplete values" });
    try {
      let result = await userModel.updateOne({ _id: uid }, userToReplace);
      res.send({ status: "success", payload: result });
    } catch (error) {
      console.log(error);
    }
  })
  .delete(async (req, res) => {
    let { uid } = req.params;
    try {
      let result = await userModel.deleteOne({ _id: uid });
      res.send({ status: "success", payload: result });
    } catch (error) {
      console.log(error);
    }
  });

export default router;
