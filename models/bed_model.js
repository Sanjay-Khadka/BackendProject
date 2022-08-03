import mongoose from "mongoose";

const bedSchema = new mongoose.Schema({
  title: {
    type: String,
    default: "Bed",
  },
  hospital: {
    type: String,
    required: true,
  },
  bedNumber: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },

  isAvailable: {
    type: Boolean,
    default: true,
  },
});

const Bed = new mongoose.model("Bed", bedSchema);

export default Bed;
