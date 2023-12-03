const express = require("express");
const {
  createMovie,
  getAllMovies,
  getMoviesWithAge,
  getSingleMovie,
} = require("../Controllers/movieController");
const movieRouter = express.Router();

movieRouter.post("/create/movie", createMovie);
movieRouter.get("/get/all/movies", getAllMovies);
movieRouter.get("/get/movie/:id", getSingleMovie);
movieRouter.get("/get/movies", getMoviesWithAge);

module.exports = movieRouter;
