import mongoose from "mongoose";
import moment from "moment";

const BedRequestSchema = new mongoose.Schema({
  request_type: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Bed",
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
    type: Boolean,
    default: false,
  },
  requestedUrgency: {
    type: String,
    required: true,
  },
});

const BedRequests = new mongoose.model("BedRequest", BedRequestSchema);

export default BedRequests;
