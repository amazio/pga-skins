const tourneyService = require('./tourneyService');
const matchService = require('./matchService');

module.exports = {
  createMatch,
  getAllMatchesThatExistOnClient,
  getCurrentTourney,
  updateCurrentTourney,
  addMatchToViewing,
  getMatchViewing,
  removeMatchFromViewing,
  deleteMatch,
  deleteMatches,
  updateAllMatchesBeingViewed
};

// Client wants to sync with server upon loading since
// server may have deleted some docs that client has in localStorage
function getAllMatchesThatExistOnClient(matchIds) {
  return matchService.getAllMatchesForIds(matchIds);
}

function updateAllMatchesBeingViewed(updatedPlayerIds) {
  const tourney = getCurrentTourney();
  let matches = matchService.cleanupAndGetAllMatchesBeingViewed(tourney._id)
    .filter(m => m.players.some(p => updatedPlayerIds.includes(p.playerId)));
  for (let match of matches) {
    matchService.computeSkins(match, tourney.leaderboard);
    match.save().then(doc => {
      matchService.addMatchToViewing(doc);
      matchService.notifyClientsOfUpdatedMatch(doc);
    }).catch(err => {
      return console.log('Error saving match in updateAllMatchesBeingViewed()', err);
    });
  }
}

function removeMatchFromViewing(matchId) {
  matchService.removeMatchFromViewing(matchId);
}

function getMatchViewing(matchId) {
  const curTourney = tourneyService.getCurrent();
  return matchService.getMatchViewing(matchId, curTourney);
}

function addMatchToViewing(matchDoc) {
  matchService.addMatchToViewing(matchDoc);
}

function deleteMatch(matchId) {
  matchService.deleteMatch(matchId);
}

function deleteMatches(matches, deviceId) {
  matchService.deleteMatches(matches, deviceId);
}

function createMatch(matchData) {
  const players = getCurrentTourney().leaderboard;
  // matchData will have selectedPlayerIds so need to transform
  // this into players with name and playerId before creating
  matchData.players = matchData.selectedPlayerIds.map(pId => ({...players.find(p => p.playerId === pId)}));
  delete matchData.selectedPlayerIds;
  matchService.computeSkins(matchData, players);
  return matchService.create(matchData);
}

function getCurrentTourney() {
  return tourneyService.getCurrent();
}

function updateCurrentTourney(tourney, updatedPlayerIds) {
  tourneyService.update(tourney);
  updateAllMatchesBeingViewed(updatedPlayerIds);
}
