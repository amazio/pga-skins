const io = require('socket.io')();
const realtimeService = require('./services/realtimeService');
const messages = require('./services/socketMessages');

io.on('connection', function(socket) {

  socket.on(messages.CREATE_MATCH, async function(matchData, cb) {
    try {
      const matchDoc = await realtimeService.createMatch(matchData);
      // TODO:  add match to tracking
      // TODO:  add this socket to room named using matchDoc.id
      // TODO:  put matchDoc.id on socket object, ie., socket.matchId = matchDoc.id
      cb(null, matchDoc);
    } catch(e) {
      cb(e);
    }
  });

  io.on('disconnect', function() {
    // TODO:  remove socket from room with socket.matchId
    // TODO:  if room has no more sockets, remove matchDoc from tracking
  });
  
});

module.exports = io;