const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema(
  {
    creator: { type: Schema.Types.ObjectId, ref: "User" },
    text: String,
    meme: { type: Schema.Types.ObjectId, ref: "Meme" },
  },
  {
    timestamps: true,
  }
);

const Comments = mongoose.model("Comment", commentSchema);

module.exports = Comments;
