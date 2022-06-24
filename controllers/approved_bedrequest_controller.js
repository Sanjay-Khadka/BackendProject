import ApprovedBedRequest from "../models/approved_bedrequest_model.js";

export const approvedBedrequest = async (req, res) => {
  const bedrequestid = req.params.bedrequestid;

  const newApprovedBed = new ApprovedBedRequest({
    ApprovedBedRequest: bedrequestid,
  });
  try {
    const approvedBedrequest = await newApprovedBed.save();

    res.json({
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
    const approvedoxygen = await ApprovedBedRequest.find()
      .populate("ApprovedBedRequest")
      .select();
  } catch (err) {
    res.json(err);
  }
};
