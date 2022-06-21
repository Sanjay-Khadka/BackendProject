import express from "express";
import {
  createRequest,
  userRequestList,
  getAllRequests,
  getUrgentRequests,
} from "../controllers/request_controller.js";

const router = express.Router();
router.use(express.json());

router.post("/requests/:requestTypeId/:requestedById", createRequest);
router.get("/requests/:userid", userRequestList);
router.get("/requests", getAllRequests);
router.get("/urgent", getUrgentRequests);

export default router;
