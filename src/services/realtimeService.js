import messages from './socketMessages';
import { actions } from '../reducers/store-reducer';
import matchService from './matchService';

const socket = window.io();

// Need access to reducer's dispatch
let savedDispatch;

export default {
  sendDebugMsg,
  setDispatch,
  syncMatchesWithServer,
  createMatch,
  viewMatch,
  stopViewingMatch,
  deleteMatch,
  deleteMatches
};

/*--- Emitters ---*/
function sendDebugMsg(msg) {
  socket.emit(messages.DEBUG, msg);
}

function deleteMatch(matchId, isMatchOwner) {
  savedDispatch({type: actions.DELETE_MATCH, payload: matchId});
  if (isMatchOwner) socket.emit(messages.DELETE_MATCH, matchId);
}

function deleteMatches(matches, deviceId) {
  socket.emit(messages.DELETE_MATCHES, matches, deviceId);
}

function setDispatch(dispatch) {
  // cache the store's dispatch function
  savedDispatch = dispatch;
}

async function syncMatchesWithServer() {
    const localMatchIds = matchService.getSavedMatches().map(m => m._id);
    // Server will return the matches still existing in the db
    // Client will then cleanup/sync its matches locally in the callback
    socket.emit(messages.SYNC_MATCHES, localMatchIds, function(matchesOnServer) {
      savedDispatch({type: actions.SET_ALL_MATCHES, payload: matchesOnServer});
    });
}

function viewMatch(matchId, dispatch) {
  if (dispatch) savedDispatch = dispatch;
  socket.emit(messages.START_VIEWING_MATCH, matchId, function(matchExists) {
    if (!matchExists) savedDispatch({type: actions.DELETE_MATCH, payload: matchId});
  });
}

function stopViewingMatch(matchId) {
  socket.emit(messages.STOP_VIEWING_MATCH, matchId);
  savedDispatch({type: actions.STOP_VIEWING_MATCH});
}

function createMatch(matchData, cb) {
  socket.emit(messages.CREATE_MATCH, matchData, cb);
}

/*--- Listeners ---*/
socket.on(messages.UPDATE_VIEWING_MATCH, function(match) {
  if (match) savedDispatch({type: actions.UPDATE_VIEWING_MATCH, payload: match});
});

// socket.on('reconnect', function renewViewMatch() {
//   sendDebugMsg('socket.on: reconnect');
//   savedDispatch({type: actions.RECONNECT});
// });
