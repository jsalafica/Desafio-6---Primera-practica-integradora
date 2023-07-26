import express, { json, urlencoded } from "express";
import { engine } from "express-handlebars";
import mongoose from "mongoose";
import router from "./routes/router.js";
import { __dirname } from "./utils.js";

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
db.once("open", () => {
  console.log("DB connected successfully");
});

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", __dirname + "/views");
app.use(express.static(__dirname + "/public"));
app.use("/", router);
