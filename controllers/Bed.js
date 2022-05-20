import Bed from "../models/Bed.js";
import Hospital from "../models/hospital.js";

export const createBed = async (req, res) => {
  const hospitalId = req.params.hospitalid;

  const newBed = new Bed(req.body);
  console.log("this run");
  try {
    const savedBed = await newBed.save();
    try {
      await Hospital.findByIdAndUpdate(hospitalId, {
        $push: { beds: savedBed._id },
      });
      // res.send("bed updated successfully");
      res.send(savedBed._id);
    } catch (err) {
      // next(err);
      res.send(err);
    }
    // res.status(200).json(savedBed);
  } catch (err) {
    // next(err);
    res.json({ error: err });
  }
};

export const updateBed = async (req, res) => {
  const hospitalId = req.params.hospitalid;
  try {
    const updatedBed = await Bed.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    try {
      await Hospital.findByIdAndUpdate(hospitalId, {
        $set: { beds: req.params.id },
      });
    } catch (err) {
      res.status(400).json({ error: "could not update bed" });
    }
    res.status(200).json(updatedBed);
  } catch (err) {
    res.status(400).json("could not update hospital bed");
  }
};

export const deleteBed = async (req, res) => {
  const hospitalId = req.params.hospitalid;
  try {
    const deleteBed = await Bed.findByIdAndDelete(req.params.id);
    try {
      await Hospital.findByIdAndUpdate(hospitalId, {
        $pull: { beds: req.params.id },
      });
    } catch (err) {
      res.status(400).json({ error: "could not delete bed in hospital" });
    }
    res.status(200).json({ success: "Bed deleted Successfully", deleteBed });
  } catch {
    res.status(500).json({ error: "could not delete Bed" });
  }
};

export const getBed = async (req, res) => {
  try {
    const Beds = await Bed.find({});
    res.status(200).json(Beds);
  } catch (err) {
    res.status(400).json(err);
  }
};
