const io = require('../io');
const tourneyService = require('./tourneyService');

module.exports = {
  getCurrentTourney,
  updateTourney
};

function getCurrentTourney() {
  return tourneyService.getCurrent();
}

function updateTourney(tourney) {
  tourneyService.update(tourney);
  io.emit('update-tourney', tourney);
}