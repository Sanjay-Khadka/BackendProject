import express from "express";
import User from "../models/users.js";
const router = express.Router();
router.use(express.json());

router.post("/register", async (req, res) => {
  const users = new User({
    fullname: req.body.fullname,
    email: req.body.email,
    password: req.body.password,
  });
  try {
    const savedUser = await users.save();
    res.status(200).send(savedUser);
  } catch {
    (error) => console.log(error);
    res.status(400).send("User Registration failed");
  }
});

export default router;
