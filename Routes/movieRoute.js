const express = require("express");
const {
  createMovie,
  updateCaption,
} = require("../Controllers/movieController");
const movieRouter = express.Router();

movieRouter.post("/create/movie", createMovie);

module.exports = movieRouter;
