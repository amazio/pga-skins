const io = require('socket.io')();
const realtimeService = require('./services/realtimeService');
const messages = require('./services/socketMessages');

global.io = io;

io.on('connection', function(socket) {

  socket.on(messages.DEBUG, function(msg) {
    console.log(`socket: ${socket.id}\nSent Debug Messge: ${msg}`);
  });

  socket.on(messages.SYNC_MATCHES, async function(clientMatchIds, cb) {
    const matchDocs = await realtimeService.getAllMatchesThatExistOnClient(clientMatchIds);
    cb(matchDocs);
  });

  socket.on(messages.CREATE_MATCH, async function(matchData, cb) {
    try {
      const matchDoc = await realtimeService.createMatch(matchData);
      // Add matchDoc to tracking because a START_VIEWING_MATCH is coming next
      realtimeService.addMatchToViewing(matchDoc);
      // Just send back match
      // Client will then route to the view match screen and send
      // the START_VIEWING_MATCH message 
      cb(null, matchDoc);
    } catch(e) {
      cb(e);
    }
  });

  socket.on(messages.START_VIEWING_MATCH, async function(matchId, cb) {

    console.log(`(4) SERVER io:  START_VIEWING_MATCH / matchId: ${matchId}`)

    // Will get matchDoc from tracking if exists, otherwise will query for it
    let matchDoc = await realtimeService.getMatchViewing(matchId);
    if (!matchDoc) {
      // Match no longer exists, let client know via cb and exit
      return cb(false);
    } else {
      console.log(`(9) START_VIEWING_MATCH callback with true`)
      cb(true);
    } 
    // Add this socket to room for the viewed match if for current tourney
    const currentTourneyId = realtimeService.getCurrentTourney()._id;
    if (matchDoc.tourneyId.equals(currentTourneyId)) {
      console.log(`START_VIEWING_MATCH socket.join(${matchId})`)
      socket.join(matchId);
      // Put viewing match's id on socket object for cleanup
      socket.viewingMatchId = matchId;
    }
    socket.emit(messages.UPDATE_VIEWING_MATCH, matchDoc);
  });

  socket.on(messages.STOP_VIEWING_MATCH, function(matchId) {
    delete socket.viewingMatchId;
    // Remove this socket from room for the viewed match
    socket.leave(matchId);
    // If room has no more sockets, remove doc from tracking so that no
    // further updates will be calculated and emitted for this match
    // Update below
    // Keep updating for mobile browsers
    // if (!io.of('/').adapter.rooms.has(matchId)) realtimeService.removeMatchFromViewing(matchId);
  });
  
  socket.on(messages.DELETE_MATCH, function(matchId) {
    realtimeService.deleteMatch(matchId);
  });
  
  socket.on(messages.DELETE_MATCHES, function(matches, deviceId) {
    realtimeService.deleteMatches(matches, deviceId);
  });
  
  socket.on('disconnect', function() {
    // If viewing a match, get its id
    // const matchId = socket.viewingMatchId;
    // If room has no more sockets, remove doc from tracking so that no
    // further updates will be calculated and emitted for this match
    // Keep updating for mobile browsers
    // if (matchId && !io.of('/').adapter.rooms.has(matchId)) realtimeService.removeMatchFromViewing(matchId);
  });
  
});


module.exports = io;