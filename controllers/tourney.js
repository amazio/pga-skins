const tourneyService = require('../services/tourneyService');

module.exports = {
  update
};

function update(req, res) {
  tourneyService.update(req.body);
  res.json({tourneyUpdated: new Date()});
}