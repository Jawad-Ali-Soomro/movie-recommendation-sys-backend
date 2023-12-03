const { mongo, default: mongoose } = require("mongoose");

const movieSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  duration: {
    type: String,
  },
  captions: {
    type: String
  },
  agelimit: {
    type: Number
  }
});

const Movie = mongoose.model("Movie", movieSchema);
module.exports = Movie;
