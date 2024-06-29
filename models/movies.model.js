const mongoose = require("mongoose");

// Create a model for movies
const movieSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    minlength: [3, "Name must be 3 chars long"],
  },
  info: {
    type: String,
    required: [true, "Info is required"],
    minlength: [3, "Info must be 12 chars long"],
  },
  image: { type: String },
  rating: {
    type: Number,
    required: [true, "Rating is required"],
    min: [0, "Must be between 0 - 10"],
    max: [10, "Must be between 0 - 10"],
  },
});

const movieModel = mongoose.model("movies", movieSchema);

module.exports = movieModel;
