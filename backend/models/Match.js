const mongoose = require('mongoose');

const matchSchema = mongoose.Schema({
  homeTeam: {
    type: String,
    required: true,
  },
  awayTeam: {
    type: String,
    required: true,
  },
  homeTeamScore: {
    type: Number,
    default: 0,
  },
  awayTeamScore: {
    type: Number,
    default: 0,
  },
  startTime: {
    type: Date,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  endTime: {
    type: Date,
  },
  isActive: {
    type: Boolean,
    default: false,
  },
  league: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Match', matchSchema);
