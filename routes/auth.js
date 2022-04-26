import express from "express";
import User from "../models/users.js";
const router = express.Router();
router.use(express.json());

router.post("/", (req, res) => {
  const users = new User(req.body);

  users
    .save()
    .then(() => res.send(users))
    .catch((error) => res.send(error));
});

export default router;
