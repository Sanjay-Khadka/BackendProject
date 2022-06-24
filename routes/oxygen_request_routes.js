import express from "express";
import {
  createOxygenRequest,
  userOxygenRequestList,
  getAllOxygenRequests,
  getUrgentOxygenRequests,
} from "../controllers/oxygen_request_controller.js";

const router = express.Router();
router.use(express.json());

router.post("/createoxygen/:requestTypeId/:requestedById", createOxygenRequest);
router.get("/getUoxygenrequests/:userid", userOxygenRequestList);
router.get("/getalloxygenrequests", getAllOxygenRequests);
router.get("/geturgentoxygen", getUrgentOxygenRequests);

export default router;
