import Bed from "../models/bed_model.js";

export const createBed = async (req, res) => {
  const beds = new Bed(req.body);
  try {
    const savedBed = await beds.save();

    res.json({
      message: "Successfully added Bed ",
      data: savedBed,
    });
  } catch (err) {
    // next(err);
    res.json({ message: "Sorry couldn't add Bed", error: err });
    console.log(beds);
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

    res.status(200).json(updatedBed);
  } catch (err) {
    res.status(400).json("could not update hospital bed");
  }
};

export const deleteBed = async (req, res) => {
  const bedid = req.params.id;
  try {
    const deleteBed = await Bed.findByIdAndUpdate(bedid, {
      $pull: { _id: bedid },
    });

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
