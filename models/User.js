const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  username: {
    type: String,
  },
  age: {
    type: Number,
  },
  avatar: {
    type: Object,
    default: {},
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
