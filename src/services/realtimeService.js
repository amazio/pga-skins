const socket = window.io();
import messages from './socketMessages';

export function createMatch(matchData, cb) {
  socket.emit(messages.CREATE_MATCH, matchData, cb);
}

