const tourneyService = require('./tourneyService');
const matchService = require('./matchService');

module.exports = {
  createMatch,
  getCurrentTourney,
  addMatchToViewing,
  getMatchViewing,
  removeMatchFromViewing
};

function removeMatchFromViewing(matchId) {
  matchService.removeMatchFromViewing(matchId);
}

function getMatchViewing(matchId) {
  return matchService.getMatchViewing(matchId);
}

function addMatchToViewing(matchDoc) {
  matchService.addMatchToViewing(matchDoc);
}

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
