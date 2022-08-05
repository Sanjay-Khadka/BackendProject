import express from "express";
import {
  createOxygenRequest,
  userOxygenRequestList,
  getAllOxygenRequests,
  getUrgentOxygenRequests,
  approveOxygenrequest,
  getApprovedOxygen,
  getUserApprovedOxygen,
  deleteOxygenRequest,
} from "../controllers/oxygen_request_controller.js";

const router = express.Router();
router.use(express.json());

router.post("/createoxygen/:requestTypeId/:requestedById", createOxygenRequest);
router.get("/getUoxygenrequests/:userid", userOxygenRequestList);
router.get("/getalloxygenrequests", getAllOxygenRequests);
router.get("/geturgentoxygen", getUrgentOxygenRequests);
router.put("/apOxygen/:oxygenrequestid", approveOxygenrequest);
router.get("/apOxygen/approvedlist", getApprovedOxygen);
router.get("/apOxygen/:userid", getUserApprovedOxygen);
router.delete("/oxygenReq/delete/:id", deleteOxygenRequest);
export default router;
