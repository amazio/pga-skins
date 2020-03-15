const io = require('socket.io')();
const realtimeService = require('./services/realtimeService');
const messages = require('./services/socketMessages');

io.on('connection', function(socket) {

  socket.on(message.CREATE_MATCH, async function(matchData, cb) {
    try {
      //TODO:  matchData will have selectedPlayerIds, but need to transform this into players with name and playerId before creating
      // const matchDoc = await realtimeService.createMatch(matchData);
      let matchDoc = {testMatchDoc: true}
      cb(null, matchDoc);
    } catch(e) {
      cb(e);
    }
  });
  
});

module.exports = io;