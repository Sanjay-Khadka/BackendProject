import mongoose from "mongoose";

const hospitalSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  address: {
    type: String,
    required: true,
  },
  beds: {
    type: [String],
  },
  oxgen: {
    type: [String],
  },
});

const Hospital = new mongoose.model("Hospital", hospitalSchema);

export default Hospital;
