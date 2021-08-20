const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const memeSchema = new Schema(
  {
    creator: { type: Schema.Types.ObjectId, ref: "User" },
    caption1: String,
    caption2: String,
  },
  {
    timestamps: true, // show time
  }
);

const Meme = mongoose.model("Meme", memeSchema);

module.exports = Meme;