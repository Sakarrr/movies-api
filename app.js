const express = require("express");
const mongoose = require("mongoose");
const indexHandler = require("./handlers/indexHandler.js");
require("dotenv").config();

// Import all models
require("./models/movies.model.js");

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

// Routes
app.get("/", indexHandler);

app.listen(8000, () => {
  console.log("Server Started!!");
});
