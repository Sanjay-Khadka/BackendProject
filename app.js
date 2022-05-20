import express from "express";
import mongoose from "mongoose";
import Auth from "./routes/Auth.js";
import Hospitals from "./routes/Hospitals.js";
import Beds from "./routes/beds.js";
import cors from "cors";
const app = express();

app.use(express.json());
app.use(cors());
try {
  mongoose.connect("mongodb://localhost:27017/CovidApp");
  console.log("connected to db");
} catch {
  console.log("connection failed");
}

app.use("/user", Auth);

app.use("/hospital", Hospitals);
app.use("/bed", Beds);
app.get("/", (req, res) => {
  res.send("hello this ");
});
app;
const port = process.env.PORT || 8000;
app.listen(port);
