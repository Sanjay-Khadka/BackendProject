import mongoose from "mongoose";

const hospitalSchema = new mongoose.Schema({
  district: {
    type: String,
    required: true,
    // minlength: 6,
  },
  hospital: {
    type: String,
    required: true,
    minlength: 2,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Hospital = new mongoose.model("Hospital", hospitalSchema);

export default Hospital;
