const mongoose = require('mongoose')

const Schema = mongoose.Schema

const SmoothieSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  made: {
    type: String,
    required: true
  },
  user_id: {
    type: String,
    required: true
  }
}, { timestamps: true })

module.exports = mongoose.model('Smoothie', SmoothieSchema)