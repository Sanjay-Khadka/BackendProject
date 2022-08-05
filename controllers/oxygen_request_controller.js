import OxygenRequests from "../models/oxygen_request_model.js";

import AddOxygen from "../models/oxygen_model.js";

export const createOxygenRequest = async (req, res) => {
  try {
    const OxygenRequest = new OxygenRequests({
      request_type: req.params.requestTypeId,
      requestedBy: req.params.requestedById,

      requestedUrgency: req.body.requestedUrgency,
    });

    // const savedOxygenRequest = await AddOxygen.findByIdAndUpdate(request_type, {
    //   $set: { isAvailable: false },
    // });
    const savedRequest = await OxygenRequest.save();
    res.status(200).json(savedRequest);
  } catch (err) {
    res.status(402).json(err);
  }
};

export const userOxygenRequestList = async (req, res) => {
  const requestedby = req.params.userid;
  console.log(requestedby);
  try {
    const userRequest = await OxygenRequests.find({
      userid: req.params.userid,
    });
    console.log(req.params.id);
    res.json(userRequest);
  } catch (err) {
    res.status(400).json({ error: "error could not get requests list" });
  }
};

export const getAllOxygenRequests = async (req, res) => {
  try {
    const allRequests = await OxygenRequests.find()

      .populate("request_type")
      .populate("requestedBy")

      .select("");
    console.log("asufg");
    res.json(allRequests);
  } catch (err) {
    console.log(err);
    res.json(err);
  }
};

export const getUrgentOxygenRequests = async (req, res) => {
  try {
    const urgentRequest = await Requests.find({ requestedUrgency: "normal" });
    res.json(urgentRequest);
  } catch (err) {
    res.json(err);
  }
};

export const approveOxygenrequest = async (req, res) => {
  const oxygenRequestid = req.params.oxygenrequestid;

  try {
    await OxygenRequests.findByIdAndUpdate(oxygenRequestid, {
      $set: { requestStatus: "approved" },
    });
    await res.json({
      message: "oxygen request approved ",
    });
  } catch (err) {
    // next(err);
    res.json({
      message: "Sorry couldn't sorry couldnot approve oxygen request",
      error: err,
    });
    console.log(beds);
  }
};

export const getApprovedOxygen = async (req, res) => {
  try {
    const approvedOxygenRequest = await OxygenRequests.find({
      requestStatus: "approved",
    })
      .populate("request_type")
      .populate("requestedBy")
      .select();

    res.json({
      message: "Fetched approved oxygen list",
      data: approvedOxygenRequest,
    });
  } catch (err) {
    res.json({ message: "couldnot fetch approved oxygen list" });
  }
};

export const getUserApprovedOxygen = async (req, res) => {
  const userid = req.params.userid;
  try {
    const userApprovedOxygen = await OxygenRequests.find({
      requestStatus: "approved",
      requestedBy: userid,
    })
      .populate("request_type")
      .select();

    res.json({
      message: "fetched approved oxygen request list ",
      data: userApprovedOxygen,
    });
  } catch (err) {
    res.json({ message: "sorry couldnot fetch approved oxygen list " });
  }
};

export const deleteOxygenRequest = async (req, res) => {
  const oxygenreqid = req.params.id;
  try {
    const deleteoxygenReq = await OxygenRequests.findByIdAndDelete(oxygenreqid);

    res.status(200).json({
      success: "Oxygen request deleted successfully",
      deleteoxygenReq,
    });
  } catch {
    res.status(500).json({ error: "could not delete oxygen request" });
  }
};
