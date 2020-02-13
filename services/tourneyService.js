const io = require('../io');

// Cache the latest updated tourney
let curTourney;

module.exports = {
  getCurrent,
  update,
};

function getCurrent() {
  return curTourney;
}

function update(tourney) {
  curTourney = tourney;
}