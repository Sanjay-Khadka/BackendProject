import express from "express";
import {
  approvedBedrequest,
  getApprovedBed,
} from "../controllers/approved_bedrequest_controller.js";

const router = express.Router();
router.use(express.json());

router.post("/bedrequestid", approvedBedrequest);

router.get("/getallApprovedBedrequests", getApprovedBed);

export default router;
