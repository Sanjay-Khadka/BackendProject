import mongoose from "mongoose";

const oxygenSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  volume: {
    type: Number,
    required: true,
  },
  status: {
    type: Boolean,
    default: false,
  },
  oxygenNumbers: [{ number: Number }],
  // bedNumbers: [{ number: Number }],
});

const Oxygen = new mongoose.model("Oxygen", oxygenSchema);

export default Oxygen;
