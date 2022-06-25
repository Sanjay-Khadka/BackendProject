import mongoose from "mongoose";
import moment from "moment";

const ApprovedOxygenSchema = new mongoose.Schema({
  ApprovedOxygenRequest: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "OxygenRequests",
  },
  ApprovedAt: {
    type: String,
    default: moment(Date.now()).format("MMM DD, h:mm a"),
  },
});

const ApprovedOxygenRequests = new mongoose.model(
  "ApprovedOxygen",
  ApprovedOxygenSchema
);

export default ApprovedOxygenRequests;
