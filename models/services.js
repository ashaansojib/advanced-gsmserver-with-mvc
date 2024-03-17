const mongoose = require("mongoose");

const ServicesSchema = new mongoose.Schema({
  title: {
    type: String,
    unique: true,
    required: [true, "please add a title"],
  },
  category: {
    type: String,
    required: [true, "please add a category"],
  },
  brand: {
    type: String,
  },
  link: {
    type: String,
  },
  fileName: {
    type: String,
  },
  size: {
    type: String,
  },
  visitor: {
    type: String,
  },
  download: {
    type: String,
  },
  image: {
    type: String,
  },
  date: {
    type: String,
  },
});
module.exports = mongoose.model("abcService", ServicesSchema);
