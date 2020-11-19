const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const challengeSubmissionSchema = new Schema({
  title: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  useName: { type: String, required: true },
});

const ChallengeSubmission = mongoose.model('ChallengeSubmission', challengeSubmissionSchema)

module.exports = ChallengeSubmission