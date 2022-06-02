import express from "express";
import {
  createOxygen,
  updateOxygen,
  deleteOxygen,
  getOxygen,
} from "../controllers/Oxygen.js";

const router = express.Router();
router.use(express.json());

router.post("/:hospitalid", createOxygen);
router.put("/:id/:hospitalid", updateOxygen);
router.get("/", getOxygen);
router.delete("/:id/:hospitalid", deleteOxygen);

export default router;
