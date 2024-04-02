const User = require("../models/User");
const errorMessage = require("../utils/errorResponse");
const cloudinary = require("cloudinary").v2;
const convertToBase64 = require("../utils/convertToBase64");

const createUser = async (req, res) => {
  try {
    console.log("route");
    const { username, age } = req.body;
    const { avatar } = req.files;
    const cloudinaryResponse = await cloudinary.uploader.upload(
      convertToBase64(avatar)
    );
    await User.create({
      username,
      age,
      avatar: cloudinaryResponse,
    });
    res.status(201).json({ message: "User created" });
  } catch (error) {
    console.log("tom");
    errorMessage(res, error);
  }
};

const readUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    errorMessage(res, error);
  }
};

const readUser = (req, res) => {
  try {
  } catch (error) {
    errorMessage(res, error);
  }
};

const updateUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const { username, age } = req.body;
    const avatar = req.files?.avatar;
    let cloudinaryResponse;

    if (avatar) {
      cloudinaryResponse = await cloudinary.uploader.upload(
        convertToBase64(avatar)
      );
    }

    await User.findByIdAndUpdate(userId, {
      username,
      age,
      avatar: cloudinaryResponse,
    });

    res.json({ message: "User updated" });
  } catch (error) {
    errorMessage(res, error);
  }
};

const deleteUser = async (req, res) => {
  try {
    console.log("route delete");
    const userId = req.params.id;
    await User.findByIdAndDelete(userId);
    res.json({ message: "User deleted" });
  } catch (error) {
    errorMessage(res, error);
  }
};

module.exports = { createUser, readUsers, readUser, updateUser, deleteUser };
