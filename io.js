const io = require('socket.io')();
const realtimeService = require('./services/realtimeService');
const messages = require('./services/socketMessages');

global.io = io;

io.on('connection', function(socket) {

  socket.on(messages.SYNC_MATCHES, async function(clientMatchIds, cb) {
    const matchDocs = await realtimeService.getAllMatchesThatExistOnClient(clientMatchIds);
    cb(matchDocs);
  });

  socket.on(messages.CREATE_MATCH, async function(matchData, cb) {
    try {
      const matchDoc = await realtimeService.createMatch(matchData);
      // Add matchDoc to tracking because a START_VIEWING_MATCH is coming next
      realtimeService.addMatchToViewing(matchDoc);
      // Just send back matchDoc._id to client.
      // Client will then route to the view match screen and send
      // the START_VIEWING_MATCH message 
      cb(null, matchDoc.id);
    } catch(e) {
      cb(e);
    }
  });

  socket.on(messages.START_VIEWING_MATCH, async function(matchId) {
    // Will get matchDoc from tracking if exists, otherwise will query for it
    let matchDoc = await realtimeService.getMatchViewing(matchId);
    // Add this socket to room for the viewed match
    socket.join(matchId);
    // Put viewing match's id on socket object for cleanup
    socket.viewingMatchId = matchId;
    socket.emit(messages.UPDATE_VIEWING_MATCH, matchDoc);
  });

  socket.on(messages.STOP_VIEWING_MATCH, function(matchId) {
    delete socket.viewingMatchId;
    // Remove this socket from room for the viewed match
    socket.leave(matchId, function() {
      // If room has no more sockets, remove from tracking so that no
      // further updates will be calculated and emitted for this match
      const nsp = io.nsps[`/${matchId}`];
      if (!nsp) {
        realtimeService.removeMatchFromViewing(matchId);
      } else {
        const numClients = Object.keys(nsp.sockets).length;
        if (!numClients) realtimeService.removeMatchFromViewing(matchId);
      }
    });
  });

  socket.on('disconnect', function() {
    const matchId = socket.viewingMatchId;
    // Leave room if viewing match
    if (matchId) {
      socket.leave(matchId, function() {
        // If room has no more sockets, remove from tracking so that no
        // further updates will be calculated and emitted for this match
        const nsp = io.nsps[`/${matchId}`];
        if (!nsp) {
          realtimeService.removeMatchFromViewing(matchId);
        } else {
          const numClients = Object.keys(nsp.sockets).length;
          if (!numClients) realtimeService.removeMatchFromViewing(matchId);
        }
      });
    }
  });
  
});

module.exports = io;