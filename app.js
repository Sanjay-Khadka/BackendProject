import express from "express";
import mongoose from "mongoose";
import authRouter from "./routes/auth.js";
import User from "./models/users.js";
import realAuth from "./routes/realAuth.js";
import Joi from "joi";

const app = express();

app.use(express.json());

// 'mongosh "mongodb+srv://covidapp.4aptm.mongodb.net/CovidApp" --apiVersion 1 --username sanjaykhadka'
mongoose
  .connect("mongodb://localhost:27017/user")
  .then(() => console.log("connected to db"))
  .catch((error) => console.log("failed"));

// app.use("/user", authRouter);
app.use("/users", realAuth);

app.get("/", (req, res) => {
  res.send("hello this ");
});
app;
const port = process.env.PORT || 3000;
app.listen(port);
