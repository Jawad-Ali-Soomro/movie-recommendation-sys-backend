const { default: mongoose } = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  movies: [
    {
      id: {
        type: String,
        ref: 'movie'
      }
    }
  ]
});
const User = mongoose.model("User" , userSchema)
module.exports = User
