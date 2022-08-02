import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true,
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
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

const User = new mongoose.model("User", userSchema);

export default User;
