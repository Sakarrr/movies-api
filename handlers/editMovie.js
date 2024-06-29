const mongoose = require("mongoose");

const editMovie = async (req, res) => {
  const MoviesModel = mongoose.model("movies");

  const { _id, name, info, rating } = req.body;

  try {
    if (!_id) {
      throw "Please provide movie id";
    }
  } catch (e) {
    res.status(400).json({
      status: "Failed",
      messgae: "Please provide id",
    });
    return;
  }

  try {
    await MoviesModel.updateOne(
      { _id: _id },
      { name: name, info: info, rating: rating }, // Only sent object keys can be edited.
      { runValidators: true }
    );
  } catch (e) {
    console.log("Mongo Error");
    res.status(400).json({
      status: "Failed",
      message: e.message,
    });
    return;
  }

  res.status(200).json({
    messgae: "Movie was edited",
  });
};

module.exports = editMovie;
