import express from "express";
import mongoose from "mongoose";
import User from "./models/users.js";
import realAuth from "./routes/realAuth.js";

const app = express();

app.use(express.json());
mongoose
  .connect("mongodb://localhost:27017/user")
  .then(() => console.log("connected to db"))
  .catch((error) => console.log("failed"));

app.use("/users", realAuth);

app.get("/", (req, res) => {
  res.send("hello this ");
});
app;
const port = process.env.PORT || 3000;
app.listen(port);
