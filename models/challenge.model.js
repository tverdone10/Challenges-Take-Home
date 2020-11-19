const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const challengeSchema = new Schema({
  title: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  startDate: { type: String, required: true },
  endDate: { type: String, required: true },
  challengeCount: { type: Number },
});

const Challenge = mongoose.Model('Challenge', challengeSchema)

module.exports = Challenge