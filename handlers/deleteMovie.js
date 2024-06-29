const mongoose = require("mongoose");

const deleteMovie = async (req, res) => {
  const MoviesModel = mongoose.model("movies");

  const { _id } = req.query;

  try {
    if (!_id) throw "Please provide id to delete";
  } catch (e) {
    console.log("Mongo Error");
    res.status(400).json({
      status: "Failed",
      message: e,
    });
    return;
  }

  await MoviesModel.deleteOne({ _id: _id });

  res.status(200).json({
    messgae: "Movie was deleted",
  });
};

module.exports = deleteMovie;
