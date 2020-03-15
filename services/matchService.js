const Match = require('../models/match');

module.exports = {
  create,
};

function create(matchData) {
  return Match.create(matchData);
}


