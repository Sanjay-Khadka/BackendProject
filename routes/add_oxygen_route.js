import express from "express";
import {
  addOxygen,
  fetchAddedOxygen,
} from "../controllers/add_oxygen_controller.js";

const router = express.Router();
router.use(express.json());

router.post("/addOxygen", addOxygen);
router.get("/fetchOxygen", fetchAddedOxygen);

export default router;
