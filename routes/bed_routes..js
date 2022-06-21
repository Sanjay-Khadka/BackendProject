import express from "express";
import {
  createBed,
  updateBed,
  deleteBed,
  getBed,
} from "../controllers/bed_controller.js";

const router = express.Router();
router.use(express.json());

router.post("/createBed", createBed);
router.put("/:id/:hospitalid", updateBed);
router.get("/getAllBed", getBed);
router.delete("/:id/", deleteBed);

export default router;
