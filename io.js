const io = require('socket.io')();
const realtimeService = require('./services/realtimeService');
const messages = require('./services/socketMessages');

io.on('connection', function(socket) {

  // Used by client to request cur tourney upon loading
  socket.on(messages.REQUEST_UPDATED_TOURNEY, function() {
    socket.emit(messages.UPDATE_TOURNEY, realtimeService.getCurrent());
  });
  
});

module.exports = io;