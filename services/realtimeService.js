const io = require('../io');
const tourneyService = require('./tourneyService');
const matchService = require('./matchService');
const messages = require('./socketMessages');

module.exports = {
  createMatch,
  // getCurrentTourney,
  // updateTourney
};

function createMatch(matchData) {
  return matchService.create(matchData);
}

// function getCurrentTourney() {
//   return tourneyService.getCurrent();
// }

// // This is called by pga-polling.managerincharge.com via
// // subscription whenever the current tourney has been updated
// function updateTourney(tourney) {
//   tourneyService.update(tourney);
//   io.emit(messages.UPDATE_TOURNEY, tourney);
// }