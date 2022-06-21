import express from "express";
import {
  createUser,
  loginUser,
  updateUser,
  deleteUser,
  getUser,
  getUsers,
} from "../controllers/AdminController";
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
