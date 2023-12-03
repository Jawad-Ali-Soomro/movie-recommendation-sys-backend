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
exports.updateUser = async (req, res) => {
  const id = req.params.id;
  const { name, email, age } = req.body;
  const getUser = await User.findById(id);
  if (getUser) {
    const updated = await User.findByIdAndUpdate(id, { name, email, age });
    res.json({
      updated,
    });
  }
};

exports.deleteUser = async (req, res) => {
  const id = req.params.id;
  const deleted = await User.findByIdAndDelete(id);
  res.json({
    deleted,
  });
};

exports.getUserById = async (req,res) => {
  const id = req.params.id
  const gotUser = await User.findById(id)
  res.json({
    gotUser
  })
}