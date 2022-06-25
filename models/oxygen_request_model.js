import mongoose from "mongoose";
import moment from "moment";

const OxygenRequestSchema = new mongoose.Schema({
  request_type: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "AddOxygen",
  },

  requestedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },

  requestedAt: {
    type: String,
    default: moment(Date.now()).format("MMM DD, h:mm a"),
  },
  requestStatus: {
    type: String,
    default: "pending",
  },
  requestedUrgency: {
    type: String,
    required: true,
  },
});

const OxygenRequests = new mongoose.model("OxygenRequest", OxygenRequestSchema);

export default OxygenRequests;
