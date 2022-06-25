import BedRequests from "../models/bed_request_model.js";

export const createBedRequest = async (req, res) => {
  try {
    const newRequest = new BedRequests({
      request_type: req.params.requestTypeId,
      requestedBy: req.params.requestedById,

      requestedUrgency: req.body.requestedUrgency,
    });
    const savedRequest = await newRequest.save();

    res.status(200).json(savedRequest);
  } catch (err) {
    res.status(402).json(err);
  }
};

export const userBedRequestList = async (req, res) => {
  const requestedby = req.params.userid;
  console.log(requestedby);
  try {
    const userBedRequest = await BedRequests.find({
      userid: req.params.userid,
    });
    console.log(req.params.id);
    res.json(userRequest);
  } catch (err) {
    res.status(400).json({ error: "error could not get requests list" });
  }
};

export const getAllBedRequests = async (req, res) => {
  try {
    const allBedRequests = await BedRequests.find()

      .populate("request_type")
      .populate("requestedBy")

      .select("");
    res.json(allBedRequests);
  } catch (err) {
    console.log(err);
    res.json(err);
  }
};

export const getUrgentBedRequests = async (req, res) => {
  try {
    const urgentRequest = await BedRequests.find({
      requestedUrgency: "normal",
    });
    res.json(urgentRequest);
  } catch (err) {
    res.json(err);
  }
};

export const approveBedrequest = async (req, res) => {
  const bedRequestid = req.params.bedrequestid;

  try {
    await BedRequests.findByIdAndUpdate(bedRequestid, {
      $set: { requestStatus: "approved" },
    });

    await res.json({
      message: "bed request approved ",
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
