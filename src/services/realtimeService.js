import messages from './socketMessages';
import { actions } from '../reducers/store-reducer';

const socket = window.io();

// Need access to reducer's dispatch
let savedDispatch;

export default {
  createMatch,
  viewMatch
};

/*--- Emitters ---*/
function viewMatch(matchId, dispatch) {
  savedDispatch = dispatch;
  socket.emit(messages.START_VIEWING_MATCH, matchId);
}

function createMatch(matchData, cb) {
  socket.emit(messages.CREATE_MATCH, matchData, cb);
}

/*--- Listeners ---*/
socket.on(messages.UPDATE_VIEWING_MATCH, function(match) {
  savedDispatch({type: actions.UPDATE_VIEWING_MATCH, payload: match});
});
