const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: { type: String, required: true },
  profileImg: String,
  userName: String,
  password: { type: String, required: true },
  zodiacSign : String,
  city : String,
  admin : Boolean,
  // likes: [{ type: Schema.Types.ObjectId, ref:"Meme"}],
  // followers: [{ type: Schema.Types.ObjectId, ref:"User"}]
});

const User = mongoose.model("User", userSchema);

module.exports = User;
