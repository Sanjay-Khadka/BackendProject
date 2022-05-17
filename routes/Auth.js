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
    console.log("user was created");
  } catch {
    (error) => console.log(error);
    res.status(400).send("User Registration failed");
  }
});

router.post("/login", async (req, res) => {
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
  const token = jwt.sign({ _id: user._id }, "secret");
  res
    .header("auth-token", token)
    .json({ token, userdata: { email, fullname } });
  console.log("request was made");
});

router.get("/users", async (req, res) => {
  // const filter = { name: "Januka khadka" };
  const all = await User.find({});
  res.send(all);
});
export default router;
