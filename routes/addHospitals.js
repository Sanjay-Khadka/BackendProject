import express from "express";
import mongoose from "mongoose";
import Hospital from "../models/hospital.js";
import User from "../models/users.js";
import verify from "../models/verifyToken.js";

const router = express.Router();
router.use(express.json());

router.post("/hospital", async (req, res) => {
  const hospitals = new Hospital({
    district: req.body.district,
    hospital: req.body.hospital,
  });
  const savedHospital = await hospitals.save();
  // res.send(savedHospital);
});

router.get("/hospitals", verify, async (req, res) => {
  const all = await Hospital.find({});

  const userdata = await User.findOne({ _id: req.user });
  res.send(userdata);
  // res.send(all);
});

export default router;
