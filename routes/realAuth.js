import express from "express";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import TOKEN_SECRET from "dotenv";
// import { userDb } from "../DB.js";
import User from "../models/users.js";
import { registerValidation, loginValidation } from "../validation.js";
import bcrypt from "bcryptjs";
import Joi from "joi";
const router = express.Router();
router.use(express.json());

// const userDb = () => {
//   try {
//     mongoose.disconnect("mongodb://localhost:27017/hospital");
//     mongoose.connect("mongodb://localhost:27017/user");
//     console.log("connected to  users db");
//   } catch (error) {
//     console.log("connection to users db failed");
//   }
// };
router.post("/register", async (req, res) => {
  // userDb();
  const { error } = registerValidation(req.body);
  if (error) {
    return res.status(400).send(error.message);
  }
  const emailExists = await User.findOne({ email: req.body.email });
  if (emailExists) {
    return res.status(400).send("email already exists");
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);
  const users = new User({
    fullname: req.body.fullname,
    email: req.body.email,
    password: hashedPassword,
  });
  try {
    const savedUser = await users.save();
    res.status(200).send({ uid: savedUser._id });
  } catch {
    (error) => console.log(error);
    res.status(400).send("User Registration failed");
  }
  // mongoose.disconnect("mongodb://localhost:27017/user");
});

router.post("/login", async (req, res) => {
  // userDb();

  const { error } = loginValidation(req.body);
  if (error) return res.status(400).send(error.message);
  const user = await User.findOne({
    email: req.body.email,
  });
  if (!user)
    return res.send({
      error: "unauthorized",
      message: "Invalid email or password",
    });
  const validPassword = await bcrypt.compare(req.body.password, user.password);
  // console.log(validPassword);
  if (!validPassword)
    return res.send({
      error: "unauthorized",
      message: "Invalid email or password",
    });
  const userdetails = await User.findOne({ email: req.body.email });
  const { fullname, email } = userdetails;
  console.log(userdetails);
  const token = jwt.sign({ _id: user._id }, "secret");
  res
    .header("auth-token", token)
    .send({ token, userdata: { email, fullname } });
});

router.get("/users", async (req, res) => {
  const filter = {};
  const all = await User.find(filter);
  res.send(all);
});
export default router;
