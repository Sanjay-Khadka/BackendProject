import express from "express";
// import Hospital from "../models/hospital.js";
import verify from "../models/verifyToken.js";
import {
  createHospital,
  deleteHospital,
  getHospitals,
  updateHospital,
} from "../controllers/hospital_controller.js";
const router = express.Router();
router.use(express.json());

router.post("/hospital", createHospital);

router.get("/hospitals", verify, getHospitals);

router.put("/hospitals/:id", verify, updateHospital);

router.delete("/hospitals/:id", verify, deleteHospital);
export default router;
