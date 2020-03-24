const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const holeSchema = new Schema({
  strokes: {type: Number, default: null},
  par: {type: Number, default: null},
  skin: {type: Boolean, default: false},
  carry: {type: Boolean, default: false}
}, {_id: false});

const roundSchema = new Schema({
  holes: [holeSchema]
}, {_id: false});

const playerSchema = new Schema({
  name: String,
  playerId: String,
  thru: {type: String, default: null},
  round: {type: roundSchema, default: {}},
  money: {type: Number, default: 0}
});

const matchSchema = new Schema({
  deviceId: {type: Number, required: true},
  username: {type: String},
  tourneyId: {type: Schema.Types.ObjectId, required: true},
  tourneyTitle: String,
  roundNum: Number,
  moneyPerSkin: {type: Number, default: 5},
  carrySkins: {type: Boolean, default: true},
  players: [playerSchema],
  completed: {type: Boolean, default: false}
}, {
  timestamps: true
});

module.exports = mongoose.model('Match', matchSchema);