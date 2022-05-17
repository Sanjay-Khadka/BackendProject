import express from "express";
import {
  createUser,
  loginUser,
  getUsers,
  getUser,
  deleteUser,
  updateUser,
} from "../controllers/User.js";
import verify from "../models/verifyToken.js";

const router = express.Router();
router.use(express.json());

router.post("/register", createUser);

router.post("/login", loginUser);

router.get("/users", getUsers);

router.get("/user/:id", getUser);

router.delete("/user/:id", verify, deleteUser);

router.put("/user/:id", verify, updateUser);
export default router;
