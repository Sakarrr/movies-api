const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

const mongo_connect = process.env.mongo_connect;

mongoose
  .connect(mongo_connect, {})
  .then(() => {
    console.log("Connection was successful");
  })
  .catch((err) => {
    console.log("Connection failed!");
  });

// Create a model for movies
const movieSchema = new mongoose.Schema({
  name: { type: String },
  info: { type: String },
  image: { type: String },
  rating: { type: Number },
});

const movieModel = mongoose.model("movies", movieSchema);

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Success",
  });
});

app.listen(8000, () => {
  console.log("Server Started!!");
});
