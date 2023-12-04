const User = require("../Models/userModel");

exports.createUser = (req, res) => {
  try {
    const { name, email, age, password, avatar } = req.body;
    User.create({ name, email, password, age, avatar }).then(
      res.status(200).json({
        success: true,
        message: "user created",
      })
    );
  } catch (error) {
    console.log(err.message);
  }
};
exports.getUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.json({
      users,
    });
  } catch (error) {
    console.log(err.message);
  }
};
exports.updateUser = async (req, res) => {
  try {
    const id = req.params.id;
    const { name, email, age } = req.body;
    const getUser = await User.findById(id);
    if (getUser) {
      const updated = await User.findByIdAndUpdate(id, { name, email, age });
      res.json({
        updated,
      });
    }
  } catch (error) {
    console.log(err.message);
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    const deleted = await User.findByIdAndDelete(id);
    res.json({
      deleted,
    });
  } catch (error) {
    console.log(err.message);
  }
};

exports.getUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const gotUser = await User.findById(id);
    res.json({
      gotUser,
    });
  } catch (error) {
    console.log(err.message);
  }
};
