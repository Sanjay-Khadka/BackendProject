import "dotenv/config";
import User from "../models/user_model.js";
import { registerValidation, loginValidation } from "../validation.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import Joi from "joi";

export const getUsers = async (req, res) => {
  try {
    const allUsers = await User.find({ isAdmin: false });
    res.send(allUsers);
    console.log("all users fetched");
  } catch (err) {
    res.status(404).json({ error: "could not get users", err });
    console.log("all user data fetching failed");
  }
};

export const makeAdmin = async (req, res) => {
  try {
    const admin = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json({ success: "making admin successfull" });
  } catch {
    res.status(400).json({ error: "couldnot make admin" });
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
