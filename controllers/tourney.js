const tourneyService = require('../services/tourneyService');

module.exports = {
  current,
  update
};

function current(req, res) {
  res.json(tourneyService.getCurrent());
}

// This is called by pga-polling.managerincharge.com via
// subscription whenever the current tourney has been updated
function update(req, res) {
  tourneyService.update(req.body);
  // send minimum response to pga-polling.managerincharge.com
  res.json({tourneyUpdated: new Date()});
}