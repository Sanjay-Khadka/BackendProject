import User from "../models/users.js";
// import verify from "../models/verifyToken.js";
import { registerValidation, loginValidation } from "../validation.js";
import jwt from "jsonwebtoken";
import TOKEN_SECRET from "dotenv";
import bcrypt from "bcryptjs";
import Joi from "joi";

export const createUser = async (req, res) => {
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
};

export const loginUser = async (req, res) => {
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

  try {
    const userdetails = await User.findOne({ email: req.body.email });
    const { fullname, email } = userdetails;
    const token = jwt.sign({ _id: user._id }, "secret");
    res
      .header("auth-token", token)
      .json({ token, userdata: { email, fullname } });
    console.log("Login request successfull ");
  } catch (err) {
    res.status(401).json({ error: "couldnot login", err });
    console.log("Login requres failed");
  }
};

export const getUsers = async (req, res) => {
  try {
    const allUsers = await User.find({});
    res.send(allUsers);
    console.log("all users fetched");
  } catch (err) {
    res.status(404).json({ error: "could not get users", err });
    console.log("all user data fetching failed");
  }
};

export const getUser = async (req, res) => {
  try {
    const user = await User.findById({ _id: req.params.id });
    res.send(user);
    console.log("specific user data fetched");
  } catch (err) {
    res.status(404).json({ error: "could not find the user", err });
    console.log("fetching failed for specific user data");
  }
};

export const deleteUser = async (req, res) => {
  try {
    const deleteUser = await User.findByIdAndDelete(req.params.id);
    res.status(200).json({ success: "User deleted Successfully " });
    console.log("user deleted");
  } catch {
    res.status(500).json({ error: "could not delete the User" });
    console.log("user deletion failed");
  }
};

export const updateUser = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch {
    res.status(500).json({ error: "could not updated user details" });
  }
};
