import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import Auth from "./routes/user_route.js";
import Hospitals from "./routes/hospital_routes.js";
import Beds from "./routes/bed_routes..js";
import AddOxygen from "./routes/add_oxygen_route.js";
import OxygenRequests from "./routes/oxygen_request_routes.js";
import BedRequests from "./routes/bed_request_routes.js";
import Admin from "./routes/admin_routes.js";

const app = express();

app.use(express.json());

try {
  // mongoose.connect("mongodb://localhost:27017/CovidApp");

  mongoose.connect(process.env.DATABASE);
  console.log("connected to db");
  console.log("testing heroku");
} catch {
  console.log("connection failed");
}

app.use("/user", Auth);

app.use("/hospital", Hospitals);
// app.use("/oxygen", Oxygens);
app.use("/bed", Beds);
app.use("/oxygen", AddOxygen);
app.use("/", BedRequests);
app.use("/", OxygenRequests);
app.use("/admin", Admin);
app.get("/", (req, res) => {
  res.send("hello this ");
});

const port = process.env.PORT || 8000;
app.listen(port, console.log(`server running on http://localhost:${port}`));
