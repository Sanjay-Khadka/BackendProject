import mongoose from "mongoose";
import moment from "moment";

const ApprovedBedSchema = new mongoose.Schema({
  ApprovedBedRequest: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "BedRequest",
  },
  ApprovedAt: {
    type: String,
    default: moment(Date.now()).format("MMM DD, h:mm a"),
  },
  bedrequestid: {
    type: mongoose.Schema.Types.ObjectId,
  },
});

const ApprovedBedRequests = new mongoose.model(
  "ApprovedBed",
  ApprovedBedSchema
);

export default ApprovedBedRequests;
