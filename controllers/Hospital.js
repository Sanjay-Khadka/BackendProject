import Hospital from "../models/hospital.js";

export const createHospital = async (req, res) => {
  try {
    console.log("hospital");
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
};

export const getHospitals = async (req, res) => {
  try {
    const all = await Hospital.find({});

    // const userdata = await User.findOne({ _id: req.user });
    // res.send(userdata);

    res.send(all);
  } catch {
    res.json({ error: "could not get the hospitals list" });
  }
};

export const getHospital = async (req, res) => {};

export const updateHospital = async (req, res) => {
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
};

export const deleteHospital = async (req, res) => {
  try {
    const deleteHospital = await Hospital.findByIdAndDelete(req.params.id);
    res
      .status(200)
      .json({ success: "Hospital deleted Successfully", deleteHospital });
  } catch {
    res.status(500).json({ error: "could not delete Hospital" });
  }
};
