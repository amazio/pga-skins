import messages from './socketMessages';

const socket = window.io();

export default {
  createMatch
};

function createMatch(matchData, cb) {
  socket.emit(messages.CREATE_MATCH, matchData, cb);
}

