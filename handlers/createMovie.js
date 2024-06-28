const mongoose = require("mongoose");
// const MoviesModel = mongoose.model("movies"); // Error triggered

const createMovie = async (req, res) => {
  const MoviesModel = mongoose.model("movies"); // Should be exact to model name.

  console.log(req.body);

  await MoviesModel.create({
    name: req.body.name,
    info: req.body.info,
    image: req.body.image,
    rating: req.body.rating,
  });

  res.status(200).json({
    messgae: "Movie was created",
  });
};

module.exports = createMovie;
