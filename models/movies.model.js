const mongoose = require("mongoose");

// Create a model for movies
const movieSchema = new mongoose.Schema({
  name: { type: String },
  info: { type: String },
  image: { type: String },
  rating: { type: Number },
});

const movieModel = mongoose.model("movies", movieSchema);

module.exports = movieModel;
