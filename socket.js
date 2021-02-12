const socket = require('socket.io-client')(process.env.SOCKET_SERVER_URL);
const messages = require('./services/socketMessages');
const realtimeService = require('./services/realtimeService');

socket.on('connect', function() {
  console.log('Connected to socket.io server');
});

socket.on(messages.LB_UPDATED, function({tourney, updatedPlayerIds}) {
  console.log('Received updated tourney', tourney._id);
  console.log('Updated player Ids: ', updatedPlayerIds);
  realtimeService.updateCurrentTourney(tourney, updatedPlayerIds);
});

module.exports = socket;