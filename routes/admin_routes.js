import express from "express";
import {
  createAdmin,
  updateUser,
  deleteUser,
  getUsers,
} from "../controllers/admin_controller.js";
import verify from "../models/verifyToken.js";

const router = express.Router();
router.use(express.json());

router.post("/register", createAdmin);

router.get("/users", getUsers);

router.delete("/user/:id", verify, deleteUser);

router.put("/user/:id", verify, updateUser);
export default router;
