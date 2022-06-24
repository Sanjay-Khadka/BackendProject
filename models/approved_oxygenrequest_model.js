import mongoose from "mongoose";
import moment from "moment";

const ApprovedOxygenSchema = new mongoose.Schema({
  ApprovedOxygenRequest: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "OxygenRequests",
  },
});

const ApprovedOxygenRequests = new mongoose.model(
  "ApprovedOxygen",
  ApprovedOxygenSchema
);

export default ApprovedOxygenRequests;
