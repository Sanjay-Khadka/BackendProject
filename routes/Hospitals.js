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
    res.send("could not get hospitals");
  }
});

router.get("/hospitals", verify, async (req, res) => {
  try {
    const all = await Hospital.find({});

    // const userdata = await User.findOne({ _id: req.user });
    // res.send(userdata);

    res.send(all);
  } catch {
    res.json({ error: "could not get the hospitals list" });
  }
});

router.put("/hospitals/:id", verify, async (req, res) => {
  try {
    const updatedHospital = await Hospital.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedHospital);
  } catch {
    res.status(500).json({ error: "could not updated hospital" });
  }
});

router.delete("/hospitals/:id", verify, async (req, res) => {
  try {
    const deleteHospital = await Hospital.findByIdAndDelete(req.params.id);
    res.status(200).json({ success: "Hospital deleted Successfully" });
  } catch {
    res.status(500).json({ error: "could not delete Hospital" });
  }
});
export default router;
