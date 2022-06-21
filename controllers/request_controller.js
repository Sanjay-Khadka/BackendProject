import AddOxygen from "../models/oxygen_model.js";
import User from "../models/user_model.js";
import Requests from "../models/request_model.js";
import Bed from "../models/bed_model.js";
export const createRequest = async (req, res) => {
  try {
    const newRequest = new Requests({
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

export const userRequestList = async (req, res) => {
  const requestedby = req.params.userid;
  console.log(requestedby);
  try {
    const userRequest = await Requests.find({ userid: req.params.userid });
    console.log(req.params.id);
    res.json(userRequest);
  } catch (err) {
    res.status(400).json({ error: "error could not get requests list" });
  }
};

export const getAllRequests = async (req, res) => {
  try {
    const allRequests = await Requests.find()

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

export const getUrgentRequests = async (req, res) => {
  try {
    const urgentRequest = await Requests.find({ requestedUrgency: "normal" });
    res.json(urgentRequest);
  } catch (err) {
    res.json(err);
  }
};
