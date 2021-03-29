const mongoose = require("mongoose");

const modeldata = new mongoose.Schema({
  title: {
    type: String,
    require: true,
    trim: true,
  },
  desc: {
    type: String,
    require: false,
    trim: true,
  },
  quantity: {
    type: String,
    require: true,
    trim: true,
  },
  stock: {
    type: String,
    require: true,
    trim: true,
  },
});
module.exports = mongoose.model("data2", modeldata);
