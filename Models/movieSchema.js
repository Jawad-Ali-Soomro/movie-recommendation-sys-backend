const { mongo, default: mongoose } = require("mongoose");

const movieSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  duration: {
    type: String,
  },
  ratings: [
    {
      stars: Number,
      message: String,
      id: {
        type: String,
        ref: "user",
      },
    },
  ],
  creator: {
    type: String,
    ref: "user",
  },
});

const Movie = mongoose.model("Movie", movieSchema);
module.exports = Movie;
