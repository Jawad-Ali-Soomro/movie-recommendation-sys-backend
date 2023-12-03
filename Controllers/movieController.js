const Movie = require("../Models/movieSchema");
const User = require("../Models/userModel");

exports.createMovie = async (req, res) => {
  const { name, duration, captions, agelimit } = req.body;
  const created = await Movie.create({
    name,
    duration,
    captions,
    agelimit,
  }).then(
    res.status(200).json({
      success: true,
      message: "movie created",
    })
  );
};

exports.getAllMovies = async (req, res) => {
  const getMovies = await Movie.find({});
  res.json({
    getMovies,
  });
};

exports.getMoviesWithAge = async (req, res) => {
  try {
    const { age } = req.body;
    const getMovies = await Movie.find({ agelimit: { $lte: age } });
    res.json({
      getMovies,
    });
  } catch (error) {
    console.log(error.message);
  }
};
