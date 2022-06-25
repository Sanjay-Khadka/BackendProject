import ApprovedBedRequest from "../models/approved_bedrequest_model.js";
import BedRequests from "../models/bed_request_model.js";
export const approvedBedrequest = async (req, res) => {
  const bedRequestid = req.params.bedrequestid;

  const newApprovedBed = new ApprovedBedRequest({
    ApprovedBedRequest: bedRequestid,
    bedrequestid: bedRequestid,
  });
  try {
    await BedRequests.findByIdAndUpdate(bedRequestid, {
      $set: { requestStatus: "approved" },
    });
    const approvedBedrequest = await newApprovedBed.save();
    await res.json({
      message: "bed request approved ",
      data: newApprovedBed,
    });
  } catch (err) {
    // next(err);
    res.json({
      message: "Sorry couldn't sorry couldnot approved bed request",
      error: err,
    });
    console.log(beds);
  }
};

export const getApprovedBed = async (req, res) => {
  try {
    const approvedBed = await ApprovedBedRequest.find()
      .populate("ApprovedBedRequest")
      .select();

    console.log(approvedBed);

    res.json({ message: "Fetched Approved Bed Request", data: approvedBed });
  } catch (err) {
    res.json(err);
  }
};
