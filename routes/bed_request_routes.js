import express from "express";
import {
  createBedRequest,
  userBedRequestList,
  getAllBedRequests,
  getUrgentBedRequests,
  approveBedrequest,
  getApprovedBed,
  getUserApprovedBed,
  deleteBedRequest,
} from "../controllers/bed_request_controller.js";

const router = express.Router();
router.use(express.json());

router.post("/createBed/:requestTypeId/:requestedById", createBedRequest);
router.get("/getUBedrequests/:userid", userBedRequestList);
router.get("/getallBedrequests", getAllBedRequests);
router.get("/geturgentBed", getUrgentBedRequests);
router.put("/apbed/:bedrequestid", approveBedrequest);
router.get("/apbed/approvedbed", getApprovedBed);
router.get("/apbed/:userid", getUserApprovedBed);
router.delete("/bedReq/delete/:id", deleteBedRequest);
export default router;
