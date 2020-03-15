const io = require('../io');
const tourneyService = require('./tourneyService');
const matchService = require('./matchService');
const messages = require('./socketMessages');

module.exports = {
  createMatch,
  getCurrentTourney,
};

function createMatch(matchData) {
  // matchData will have selectedPlayerIds so need to transform
  // this into players with name and playerId before creating
  const players = getCurrentTourney().leaderboard;
  matchService.computeSkins(matchData, players)
  return matchService.create(matchData);
}

function getCurrentTourney() {
  return tourneyService.getCurrent();
}
