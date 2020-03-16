const realtimeService = require('../services/realtimeService');

module.exports = {
  current,
  update
};

function current(req, res) {
  res.json(realtimeService.getCurrentTourney());
}

// This is called by pga-polling.managerincharge.com via
// subscription whenever the current tourney has been updated
function update(req, res) {
  realtimeService.updateCurrentTourney(req.body);
  setTimeout(() => realtimeService.updateAllMatchesBeingViewed());
  // send minimum response to pga-polling.managerincharge.com
  res.json({tourneyUpdated: new Date()});
}