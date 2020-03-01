const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const holeSchema = new Schema({
  strokes: {type: Number, default: null},
  par: {type: Number, default: null}
}, {_id: false});

const roundSchema = new Schema({
  num: Number,
  strokes: {type: Number, default: null},
  holes: [holeSchema]
}, {_id: false});

const playerSchema = new Schema({
  name: String,
  playerId: String,
  roundNum: Number,
  round: roundSchema
});

const skinMatchSchema = new Schema({
  tourneyId: {type: Schema.Types.ObjectId, required: true},
  tourneyTitle: String,
  moneyPerSkin: {type: Number, default: 5},
  players: [playerSchema],
}, {
  timestamps: true
});