const io = require('socket.io')();
const realtimeService = require('./services/realtimeService');

io.on('connection', function(socket) {
  socket.emit('update-tourney', realtimeService.getCurrentTourney());
});

module.exports = io;