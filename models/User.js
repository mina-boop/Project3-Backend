const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: { type: String, required: true },
  profileImg: String,
  password: { type: String, required: true },
  lastName: String,
  firstName: String,
  zodiacSign : String,
  city : String,
  Admin : Boolean,
});

const User = mongoose.model("User", userSchema);

module.exports = User;
