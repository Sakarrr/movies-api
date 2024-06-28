const mongoose = require("mongoose");
// const MoviesModel = mongoose.model("movies"); // Error triggered

const createMovie = async (req, res) => {
  const MoviesModel = mongoose.model("movies"); // Should be exact to model name.

  await MoviesModel.create({
    name: "The Matrix",
    info: "This is a very goooood movie",
    image: "",
    rating: 8.7,
  });

  res.status(200).json({
    messgae: "Movie was created",
  });
};

module.exports = createMovie;
