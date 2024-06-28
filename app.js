const express = require("express");
const mongoose = require("mongoose");

const indexHandler = require("./handlers/indexHandler");
const getMovies = require("./handlers/getMovies.js");
const createMovie = require("./handlers/createMovie.js");
const editMovie = require("./handlers/editMovie.js");
const deleteMovie = require("./handlers/deleteMovie.js");

require("dotenv").config();

// Import all models
require("./models/movies.model.js");

// Execute Express function.
const app = express();

app.use(express.json());

// Fetch MongoDB key from env file.
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

// More routes
// CRUD
// Create
app.post("/movies", createMovie);

// Read
app.get("/movies", getMovies);

// Update
app.patch("/movies", editMovie);

// Delete
app.delete("/movies", deleteMovie);

// Listen to server.

app.listen(8000, () => {
  console.log("Server Started!!");
});
