const mongoose = require("mongoose");
// const MoviesModel = mongoose.model("movies"); // Error triggered

const createMovie = async (req, res) => {
  const MoviesModel = mongoose.model("movies"); // Should be exact to model name.

  console.log(req.body);
  const { name, info, image, rating } = req.body;

  // Validations
  if (!name) {
    res.status(400).json({ status: "Failed", messgae: "Provide name" });
    return;
  }

  if (name.length < 3) {
    res.status(400).json({
      status: "Failed",
      messgae: "Movie name must be atleast 3 chars long",
    });
    return;
  }

  if (rating > 10 || rating < 0) {
    res.status(400).json({
      status: "Failed",
      messgae: "Rating must be between 0-10",
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
