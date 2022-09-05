const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  fullname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
