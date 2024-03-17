const mongoose = require("mongoose");
const slugify = require("slugify");

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
  fileName: String,
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
ServicesSchema.pre("save", function (next) {
  console.log(this.title);
  this.fileName = slugify(this.title, { lower: true });
  next();
});

module.exports = mongoose.model("abcService", ServicesSchema);
