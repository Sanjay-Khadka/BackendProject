import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    // minlength: 6,
  },
  email: {
    type: String,
    trim: true,
    required: true,
    minlength: 2,
  },
  password: {
    type: String,
    required: true,
    min: 6,
  },
});

const ADMIN = new mongoose.model("Admin", adminSchema);

export default ADMIN;
