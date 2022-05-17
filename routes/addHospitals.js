import express from "express";
import mongoose from "mongoose";
import Hospital from "../models/hospital.js";
import User from "../models/users.js";
import verify from "../models/verifyToken.js";

const router = express.Router();
router.use(express.json());

router.post("/hospital", async (req, res) => {
  try {
    const hospitals = new Hospital({
      name: req.body.name,
      address: req.body.address,
      beds: req.body.bed,
      oxygen: req.body.bed,
    });
    const savedHospital = await hospitals.save();
    res.send(savedHospital);
  } catch {
    res.send("couldnot get hospitals");
  }
});

router.get("/hospitals", verify, async (req, res) => {
  const all = await Hospital.find({});

  const userdata = await User.findOne({ _id: req.user });
  // res.send(userdata);

  res.send(all);
});

export default router;
