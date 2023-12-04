const Movie = require("../Models/movieSchema");
const User = require("../Models/userModel");

exports.createMovie = async (req, res) => {
  try {
    const { name, duration, captions, agelimit, cover } = req.body;
    const created = await Movie.create({
      name,
      duration,
      captions,
      agelimit,
      cover,
    }).then(
      res.status(200).json({
        success: true,
        message: "movie created",
      })
    );
  } catch (error) {
    console.log(err.message);
  }
};

exports.getAllMovies = async (req, res) => {
  try {
    const getMovies = await Movie.find({});
    res.json({
      getMovies,
    });
  } catch (error) {
    console.log(err.message);
  }
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

exports.getSingleMovie = async (req, res) => {
  try {
    const id = req.params.id;
    const gotMovie = await Movie.findById(id);
    res.json({
      gotMovie,
    });
  } catch (error) {
    console.log(err.message);
  }
};
