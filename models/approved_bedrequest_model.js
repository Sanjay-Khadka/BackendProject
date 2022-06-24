import mongoose from "mongoose";
import moment from "moment";

const ApprovedBedSchema = new mongoose.Schema({
  ApprovedBedRequest: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "BedRequests",
  },
});

const ApprovedBedRequests = new mongoose.model(
  "ApprovedBed",
  ApprovedBedSchema
);

export default ApprovedBedRequests;
