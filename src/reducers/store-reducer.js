import matchService from '../services/matchService';

export const initialState = {
  username: '',
  deviceId: '',
  curTourney: null,
  curMatches: []
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
      const curMatches = matchService.updateCurMatches(action.payload);
      return {...state, curTourney: action.payload, curMatches};
    default:
      return state;
  }
}

export default storeReducer;
