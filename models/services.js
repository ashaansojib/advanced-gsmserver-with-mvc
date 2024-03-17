const mongoose = require("mongoose");

const ServicesSchema = new mongoose.Schema({
  title: {
    type: String,
    unique: true,
    required: [true, 'please add a title'],
  },
  category: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  fileName: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    required: true,
  },
  visitor: {
    type: String,
    required: true,
  },
  download: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    default: Date.new,
  },
});
module.exports = mongoose.model("abcService", ServicesSchema);
