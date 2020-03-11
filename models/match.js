const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const holeSchema = new Schema({
  strokes: {type: Number, default: null},
  par: {type: Number, default: null},
  skin: {type: Boolean, default: false},
  carry: {type: Boolean, default: false}
}, {_id: false});

const roundSchema = new Schema({
  num: Number,
  strokes: {type: Number, default: null},
  holes: [holeSchema]
}, {_id: false});

const playerSchema = new Schema({
  name: String,
  playerId: String,
  thru: {type: String, default: null},
  round: roundSchema
});

const matchSchema = new Schema({
  tourneyId: {type: Schema.Types.ObjectId, required: true},
  tourneyTitle: String,
  roundNum: Number,
  completed: {type: Boolean, default: false},
  moneyPerSkin: {type: Number, default: 5},
  players: [playerSchema]
}, {
  timestamps: true
});

module.exports = mongoose.model('Match', matchSchema);