const tourneyService = require('./tourneyService');
const matchService = require('./matchService');

module.exports = {
  createMatch,
  getCurrentTourney,
  updateCurrentTourney,
  addMatchToViewing,
  getMatchViewing,
  removeMatchFromViewing,
  updateAllMatchesBeingViewed
};

function updateAllMatchesBeingViewed() {
  const tourney = getCurrentTourney();
  // matches will be an array
  let matches = matchService.cleanupAndGetAllMatchesBeingViewed(tourney._id);
  for (let match of matches) {
    matchService.computeSkins(match, tourney.leaderboard);
    matchService.addMatchToViewing(match);
    matchService.notifyClientsOfUpdatedMatch(match);
  }
}

function removeMatchFromViewing(matchId) {
  matchService.removeMatchFromViewing(matchId);
}

function getMatchViewing(matchId) {
  const curTourneyId = tourneyService.getCurrent()._id;
  return matchService.getMatchViewing(matchId, curTourneyId);
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

function updateCurrentTourney(tourney) {
  tourneyService.update(tourney);
}
