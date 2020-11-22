const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const challengeSchema = new Schema({
  title: { type: String, unique: true },
  description: { type: String },
  startDate: { type: String },
  endDate: { type: String },
  submissions: {
    type: Array,
  },
});

const Challenge = mongoose.model("Challenge", challengeSchema);

module.exports = Challenge;
