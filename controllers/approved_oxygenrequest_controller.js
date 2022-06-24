import ApprovedOxygenRequest from "../models/approved_oxygenrequest_model.js";

export const approvedOxggenrequest = async (req, res) => {
  const oxygenrequestid = req.params.oxygenrequestid;

  const newApprovedOxygen = new ApprovedOxygenRequest({
    ApprovedBedRequest: oxygenrequestid,
  });
  try {
    const approvedOxygenrequest = await newApprovedOxygen.save();

    res.json({
      message: "oxygen request approved ",
      data: newApprovedBed,
    });
  } catch (err) {
    // next(err);
    res.json({
      message: "Sorry couldn't sorry couldnot approved oxygen request",
      error: err,
    });
    console.log(beds);
  }
};

export const getApprovedOxygen = async (req, res) => {
  try {
    const approvedoxygen = await ApprovedOxygenRequest.find()
      .populate("ApprovedOxygenRequest")
      .select();
  } catch (err) {
    res.json(err);
  }
};
