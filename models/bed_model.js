import mongoose from "mongoose";

const bedSchema = new mongoose.Schema({
  title: {
    type: String,
    default: "Bed",
  },
  price: {
    type: Number,
    required: true,
  },
  bedNumber: {
    type: Number,
    required: true,
  },

  isAvailable: {
    type: Boolean,
    default: true,
  },
  // bedNumbers: [{ number: Number }],
});

const Bed = new mongoose.model("Bed", bedSchema);

export default Bed;
