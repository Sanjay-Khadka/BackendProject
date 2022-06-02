import Oxygen from "../models/oxygen.js";
import Hospital from "../models/hospital.js";

export const createOxygen = async (req, res) => {
  const hospitalId = req.params.hospitalid;

  const newOxygen = new Oxygen(req.body);
  try {
    const savedOxygen = await newOxygen.save();
    try {
      const updatedHospital = await Hospital.findByIdAndUpdate(hospitalId, {
        $push: { oxygens: savedOxygen._id },
      });
      res.send(savedOxygen._id);
      // res.send(updatedHospital);
      console.log(hospitalId);
    } catch (err) {
      res.send(err);
    }
    // res.status(200).json(savedOxygen);
  } catch (err) {
    // next(err);
    res.json({ error: err });
  }
};

export const updateOxygen = async (req, res) => {
  const hospitalId = req.params.hospitalid;
  try {
    const updatedOxygen = await Oxygen.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    try {
      await Hospital.findByIdAndUpdate(hospitalId, {
        $set: { oxygen: req.params._id },
      });
    } catch (err) {
      res.status(400).json({ error: "could not update oxygen" });
    }
    res.status(200).json(updatedOxygen);
  } catch (err) {
    res.status(400).json("could not update hospital oxygen");
  }
};

export const deleteOxygen = async (req, res) => {
  const hospitalId = req.params.hospitalid;
  try {
    const deleteOxygen = await Oxygen.findByIdAndDelete(req.params.id);
    try {
      await Hospital.findByIdAndUpdate(hospitalId, {
        $pull: { oxygen: req.params.id },
      });
    } catch (err) {
      res.status(400).json({ error: "could not delete oxygen in hospital" });
    }
    res
      .status(200)
      .json({ success: "oxygen deleted Successfully", deleteOxygen });
  } catch {
    res.status(500).json({ error: "could not delete oxygen" });
  }
};

export const getOxygen = async (req, res) => {
  try {
    const Oxygens = await Oxygen.find({});
    res.status(200).json(Oxygens);
  } catch (err) {
    res.status(400).json(err);
  }
};
