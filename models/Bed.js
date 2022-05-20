import mongoose from "mongoose";

const bedSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  bedNumbers: [{ number: Number, unavailableDates: [{ type: [Date] }] }],
  // bedNumbers: [{ number: Number }],
});

const Bed = new mongoose.model("Bed", bedSchema);

export default Bed;
