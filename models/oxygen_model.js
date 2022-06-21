import mongoose from "mongoose";

const addoxygenSchema = new mongoose.Schema({
  title: {
    type: String,
    default: "Oxygen",
  },

  volume: {
    type: Number,
    required: true,
  },
  isAvailable: {
    type: Boolean,
    default: true,
  },
  cylinderNumber: {
    type: Number,
    required: true,
  },
});

const AddOxygen = new mongoose.model("AddOxygen", addoxygenSchema);

export default AddOxygen;
