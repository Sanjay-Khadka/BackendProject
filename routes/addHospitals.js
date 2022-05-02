import express from "express";
import mongoose from "mongoose";
import Hospital from "../models/hospital.js";

const router = express.Router();
router.use(express.json());

router.post("/", async (req, res) => {
  const hospitals = new Hospital({
    district: req.body.district,
    hospital: req.body.hospital,
  });
  const savedHospital = await hospitals.save();
  res.send(savedHospital);
});

router.get("/", async (req, res) => {
  // const filter = {};
  const all = await Hospital.findById("626a0fe315160ff0036a7d53");
  res.send(all);
});

export default router;
