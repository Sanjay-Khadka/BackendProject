import express from "express";
import {
  approvedOxggenrequest,
  getApprovedOxygen,
} from "../controllers/approved_oxygenrequest_controller.js";

const router = express.Router();
router.use(express.json());

router.post("/oxygenrequestid", approvedOxggenrequest);

router.get("/getallApprovedOxygenrequests", getApprovedOxygen);

export default router;
