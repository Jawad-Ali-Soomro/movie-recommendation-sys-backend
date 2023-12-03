const express = require("express");
const {
  createMovie,
  getAllMovies,
  getMoviesWithAge,
} = require("../Controllers/movieController");
const movieRouter = express.Router();

movieRouter.post("/create/movie", createMovie);
movieRouter.get("/get/all/movies", getAllMovies);
movieRouter.get("/get/movies", getMoviesWithAge);

module.exports = movieRouter;
