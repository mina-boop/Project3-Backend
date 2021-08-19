const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemSchema = new Schema({
  creator: { type: Schema.Types.ObjectId, ref:"user"},
  text: String,
  content: String,
  lastName: String,
  
});

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;