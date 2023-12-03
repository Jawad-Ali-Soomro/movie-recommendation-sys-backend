const Movie = require("../Models/movieSchema");
const User = require("../Models/userModel");

exports.createMovie = async (req, res) => {
  const { name, duration, ratings, creator } = req.body;
  const created = await Movie.create({ name, duration, ratings, creator }).then(
    res.status(200).json({
      success: true,
      message: "movie created",
    })
  );
  console.log(created);
  const user = await User.findById(creator);
};
