const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const challengeSchema = new Schema({
  title: { type: String, unique: true, required: true },
  description: { type: String, required: true },
  startDate: { type: String, required: true },
  endDate: { type: String, required: true },
  submissions: {
    type: Array,
  },
});

const Challenge = mongoose.model("Challenge", challengeSchema);

module.exports = Challenge;
