const io = require('../io');
let curLeaderboard;

module.exports = {
  update
};

function update(req, res) {
  curLeaderboard = req.body;
  io.emit('update-leaderboard', curLeaderboard);
  res.json({lastUpdated: new Date()});
}