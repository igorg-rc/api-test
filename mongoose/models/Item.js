const mongoose = require('mongoose')

const ItemSchema = mongoose.Schema({
  title: {type: String},
  description: {type: String},
  keywords: {type: String},
  image: {type: String}
})

module.exports = mongoose.model('Item', ItemSchema)