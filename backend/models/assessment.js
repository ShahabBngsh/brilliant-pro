const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const assessmentSchema = new Schema({
  title: { type: String },
  duration: { type: String },
  minPassingCriteria: { type: String },
  questions: { type: String },
  answers: [{ type: String }],
});

module.exports = mongoose.model('Assessment', assessmentSchema);