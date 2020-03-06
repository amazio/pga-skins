import matchService from '../services/matchService';

export const initialState = {
  username: '',
  deviceId: '',
  curTourney: null,
  curSavedMatches: null,
  prevSavedMatches: null
};

export const actions = {
  UPDATE_USER_DEVICE_INFO: 'UPDATE_USER_DEVICE_INFO',
  UPDATE_USERNAME: 'UPDATE_USERNAME',
  UPDATE_CUR_TOURNEY: 'UPDATE_CUR_TOURNEY',
};

async function storeReducer(state, action) {
  switch(action.type) {
    case actions.UPDATE_USER_DEVICE_INFO:
      return {...state, deviceId: action.payload.deviceId, username: action.payload.username};
    case actions.UPDATE_USERNAME:
      return {...state, username: action.payload};
    case actions.UPDATE_CUR_TOURNEY:
      const [curSavedMatches, prevSavedMatches] = matchService.getCurAndPrevSavedMatches(action.payload._id);
      return {...state, curTourney: action.payload, curSavedMatches, prevSavedMatches};
    default:
      return state;
  }
}

export default storeReducer;
