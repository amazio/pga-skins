const io = require('socket.io')();
const tourneyService = require('./services/tourneyService');

io.on('connection', function(socket) {
  socket.emit('update-tourney', tourneyService.getCurrent());
});

module.exports = io;