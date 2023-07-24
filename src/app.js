import express, { json, urlencoded } from "express";
import mongoose from "mongoose";
import router from "./routes/router.js";

const app = express();
const PORT = 8080;

app.use(json());
app.use(urlencoded({ extended: true }));

const server = app.listen(PORT, (error) => {
  if (!error) {
    console.log(`Server running port ${PORT}`);
  }
});

const username = "coderhouse";
const password = "coderhouse";
const cluster = "cluster0";
const dbname = "ecommerce";
mongoose
  .connect(
    `mongodb+srv://${username}:${password}@${cluster}.kzyoxh1.mongodb.net/${dbname}?retryWrites=true&w=majority`
  )
  .catch((error) => handleError(error));
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("DB connected successfully");
});

app.use("/", router);
