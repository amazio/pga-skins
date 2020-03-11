import { actions } from '../reducers/store-reducer';
import messages from './socketMessages';

const socket = window.io();

export default {
  subscribeToTourneyUpdates
};

function subscribeToTourneyUpdates(dispatch) {
  socket.on(messages.UPDATE_TOURNEY, function(tourney) {
    dispatch({type: actions.UPDATE_CUR_TOURNEY, payload: tourney});
  });
  socket.emit(messages.REQUEST_UPDATED_TOURNEY);
}

