const realtimeService = require('../services/realtimeService');

module.exports = {
  update
};

function update(req, res) {
  realtimeService.updateTourney(req.body);
  res.json({tourneyUpdated: new Date()});
}