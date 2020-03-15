const io = require('socket.io')();
const realtimeService = require('./services/realtimeService');
const messages = require('./services/socketMessages');

io.on('connection', function(socket) {

  socket.on(messages.CREATE_MATCH, async function(matchData, cb) {
    try {
      const matchDoc = await realtimeService.createMatch(matchData);
      // Just send back matchDoc._id to client.
      // Client will then route to the view match screen and send
      // the VIEW_MATCH message 
      cb(null, matchDoc.id);
    } catch(e) {
      cb(e);
    }
  });

  socket.on(messages.VIEW_MATCH, function() {
    // TODO:  add match to tracking
    // TODO:  add this socket to room named using matchDoc.id
    // TODO:  put matchDoc.id on socket object, ie., socket.matchId = matchDoc.id
  });

  io.on('disconnect', function() {
    // TODO:  remove socket from room with socket.matchId
    // TODO:  if room has no more sockets, remove matchDoc from tracking
  });
  
});

module.exports = io;