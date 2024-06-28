const mongoose = require("mongoose");
// const MoviesModel = mongoose.model("movies"); // Error triggered

const createMovie = async (req, res) => {
  const MoviesModel = mongoose.model("movies"); // Should be exact to model name.

  console.log(req.body);
  const { name, info, image, rating } = req.body;

  await MoviesModel.create({
    name,
    info,
    image,
    rating,
  });

  res.status(200).json({
    messgae: "Movie was created",
  });
};

module.exports = createMovie;
