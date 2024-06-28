const deleteMovie = (req, res) => {
  res.status(200).json({
    messgae: "Movie was deleted",
  });
};

module.exports = deleteMovie;
