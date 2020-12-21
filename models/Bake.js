const mongoose = require('mongoose')

const bakesSchema = new mongoose.Schema({
  caption: { type: String, required: true, unique: true },
  photo: { type: String, required: true },
})

module.exports = mongoose.model('Bakes', bakesSchema)
