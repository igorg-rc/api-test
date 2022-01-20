const mongoose = require("mongoose");

const TodoSchema = mongoose.Schema({
  title: { type: String },
  description: { type: String }
})

module.exports = mongoose.model("Todo", TodoSchema)