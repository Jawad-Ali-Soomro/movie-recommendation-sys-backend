const User = require("../Models/userModel");

exports.createUser = (req, res) => {
  const { name, email, age, password } = req.body;
  User.create({ name, email, password, age }).then(
    res.status(200).json({
      success: true,
      message: "user created",
    })
  );
};

exports.getUsers = async (req, res) => {
  const users = await User.find({});
  res.json({
    users,
  });
};
