import AddOxygen from "../models/oxygen_model.js";

export const addOxygen = async (req, res) => {
  const addedOxygen = new AddOxygen(req.body);
  try {
    const savedOxygen = await addedOxygen.save();

    res.status(200).json({ success: "Added oxygen successfully" });
  } catch (err) {
    // next(err);
    res.json({ error: "couldnot add oxygen try again", err });
  }
};

export const fetchAddedOxygen = async (req, res) => {
  try {
    const addedOxygen = await AddOxygen.find({});
    res.status(200).json(addedOxygen);
  } catch (err) {
    res.status(400).json(err);
  }
};

export const fetchAvailableOxygen = async (req, res) => {
  try {
    const availableOxygen = await AddOxygen.find({ isAvailable: false });

    res
      .status(202)
      .json({ success: "fetched  available oxygen request", availableOxygen });
  } catch (err) {
    res.status(404).json({ error: "could not fetch available oxygen", err });
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
