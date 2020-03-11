const io = require('../io');
const tourneyService = require('./tourneyService');
const messages = require('./socketMessages');

module.exports = {
  getCurrent,
  update
};

function getCurrent() {
  return tourneyService.getCurrent();
}

// This is called by pga-polling.managerincharge.com via
// subscription whenever the current tourney has been updated
function update(tourney) {
  tourneyService.update(tourney);
  io.emit(messages.UPDATE_TOURNEY, tourney);
}