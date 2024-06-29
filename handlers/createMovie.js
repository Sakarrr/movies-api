const mongoose = require("mongoose");
// const MoviesModel = mongoose.model("movies"); // Error triggered

const createMovie = async (req, res) => {
  const MoviesModel = mongoose.model("movies"); // Should be exact to model name.

  const { name, info, image, rating } = req.body;

  // Validations
  try {
    if (!name) throw "Name is required";

    if (name.length < 3) throw "Movie name must be atleast 3 chars long";

    if (!info) throw "Name is required";

    if (rating > 10 || rating < 0) throw "Rating must be between 0-10";
  } catch (err) {
    res.status(400).json({
      status: "Failed",
      message: err,
    });
    return;
  }

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
