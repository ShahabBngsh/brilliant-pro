const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const materialSchema = new Schema({
  title: { type: String },
  link: { type: String },
})

module.exports = mongoose.model('Material', materialSchema);