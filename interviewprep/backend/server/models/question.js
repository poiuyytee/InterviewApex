// server/models/Question.js
const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
  question: { type: String, required: true },
  answer: { type: String, required: true },
  category: { type: String, required: true },
});

module.exports = mongoose.model('Question', QuestionSchema);
