const socket = require('socket.io-client')(process.env.SOCKET_SERVER_URL);

socket.on('connect', function() {
  console.log('Connected to socket.io server');
});

module.exports = socket;