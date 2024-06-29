const mongoose = require("mongoose");

const getMovies = async (req, res) => {
  const MoviesModel = mongoose.model("movies");

  const movies = await MoviesModel.find({
    // rating: 9.3, // For conditional find
  });

  res.status(200).json({
    movies,
  });
};

module.exports = getMovies;
