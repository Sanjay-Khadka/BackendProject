import express from "express";
import { createBed, updateBed, deleteBed, getBed } from "../controllers/Bed.js";

const router = express.Router();
router.use(express.json());

router.post("/:hospitalid", createBed);
router.put("/:id/:hospitalid", updateBed);
router.get("/", getBed);
router.delete("/:id/:hospitalid", deleteBed);

export default router;
