import express from "express";
import mongoose from "mongoose";
import Auth from "./routes/user_route.js";
import Hospitals from "./routes/hospital_routes.js";
import Oxygens from "./routes/oxygen_route.js";
import Beds from "./routes/bed_routes..js";
import AddOxygen from "./routes/add_oxygen_route.js";
import Requests from "./routes/request_routes.js";
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
// app.use("/oxygen", Oxygens);
app.use("/bed", Beds);
app.use("/oxygen", AddOxygen);
app.use("/", Requests);
app.get("/", (req, res) => {
  res.send("hello this ");
});

const port = process.env.PORT || 8000;
app.listen(port, console.log(`server running on http://localhost:${port}`));
