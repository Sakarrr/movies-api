const mongoose = require("mongoose");
// const MoviesModel = mongoose.model("movies"); // Error triggered

const createMovie = async (req, res) => {
  const MoviesModel = mongoose.model("movies"); // Should be exact to model name.

  const { name, info, image, rating } = req.body;

  try {
    await MoviesModel.create({
      name,
      info,
      image,
      rating,
    });
  } catch (e) {
    console.log("Mongo Error");
    res.status(400).json({
      status: "Failed",
      message: e.message,
    });
    return;
  }

  res.status(200).json({
    messgae: "Movie was created",
  });
};

module.exports = createMovie;
