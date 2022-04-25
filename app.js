import { parse } from "dotenv";
import express from "express";
import mongoose from "mongoose";
import Joi from "joi";
const app = express();

app.use(express.json());
// middleware

// ROUTES

// connect to db
// mongoose.connect(
//   'mongosh "mongodb+srv://covidapp.4aptm.mongodb.net/CovidApp" --apiVersion 1 --username sanjaykhadka',
//   () => {
//     console.log("connected to db");
//   }
// );
// app.listen(3000);
const users = [
  { id: 1, name: "sanjay" },
  { id: 2, name: "sujan" },
  { id: 3, name: "coby" },
];
app.get("/", (req, res) => {
  res.send("hello this ");
});
app.get("/api/users", (req, res) => {
  // res.send(req.params);
  res.send(users);
  // console.log(req);
});
app.get("/api/user/:id", (req, res) => {
  const user = users.find((c) => c.id === parseInt(req.params.id));
  if (!user) {
    res.status(404).send("the user was not found");
  } else {
    res.send(user);
  }
});

app.post("/api/users", (req, res) => {
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
  });

  const result = schema.validate(req.body);
  console.log(result);
  if (result.error) {
    res.status(400).send(result.error.message);
    return;
  } else {
    const user = {
      id: 4,
      name: req.body.name,
    };
    users.push(user);
    res.send(user);
  }
});

const port = process.env.PORT || 3000;
app.listen(3000, () => console.log(`running${port} `));
