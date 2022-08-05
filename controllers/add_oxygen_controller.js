import AddOxygen from "../models/oxygen_model.js";

export const addOxygen = async (req, res) => {
  const addedOxygen = new AddOxygen(req.body);
  try {
    const savedOxygen = await addedOxygen.save();

    res.status(200).json({ success: "added Oxygen successfully" });
  } catch (err) {
    // next(err);
    res.json({ error: "couldnot add oxygen try again", err });
  }
};

export const fetchAddedOxygen = async (req, res) => {
  try {
    const addedOxygen = await AddOxygen.find({ isAvailable: true });
    res.status(200).json(addedOxygen);
  } catch (err) {
    res.status(400).json(err);
  }
};

export const deleteOxygen = async (req, res) => {
  const oxygenid = req.params.id;
  try {
    const deleteoxygen = await AddOxygen.findByIdAndDelete(oxygenid);

    res
      .status(200)
      .json({ success: "Oxygen deleted Successfully", deleteoxygen });
  } catch {
    res.status(500).json({ error: "could not delete oxygen" });
  }
};
