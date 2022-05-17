import express from "express";
import mongoose from "mongoose";
import realAuth from "./routes/realAuth.js";
import addHospital from "./routes/addHospitals.js";
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

app.use("/user", realAuth);

app.use("/hospital", addHospital);
app.get("/", (req, res) => {
  res.send("hello this ");
});
app;
const port = process.env.PORT || 8000;
app.listen(port);
