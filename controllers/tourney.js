const io = require('../io');

let curTourney;

module.exports = {
  update
};

function update(req, res) {
  curTourney = req.body;
  io.emit('update-tourney', curTourney);
  res.json({tourneyUpdated: new Date()});
}