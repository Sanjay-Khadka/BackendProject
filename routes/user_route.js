import express from "express";
import {
  createUser,
  loginUser,
  updateUser,
} from "../controllers/user_controller.js";
import verify from "../models/verifyToken.js";

const router = express.Router();
router.use(express.json());

router.post("/register", createUser);

router.post("/login", loginUser);

router.put("/user/:id", verify, updateUser);
export default router;
