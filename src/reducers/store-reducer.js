import matchService from '../services/matchService';

export const initialState = {
  settings: {
    deviceId: '',
    username: '',
    moneyPerSkin: 0,
    carrySkins: true
  },
  curTourney: null,
  curSavedMatches: null,
  prevSavedMatches: null,
  ui: {
    matchesTab: 'current',
    saveBtnDisabled: false
  }
};

export const actions = {
  UPDATE_SETTINGS: 'UPDATE_SETTINGS',
  UPDATE_USERNAME: 'UPDATE_USERNAME',
  UPDATE_CUR_TOURNEY: 'UPDATE_CUR_TOURNEY',
  UPDATE_UI_MATCHES_TAB: 'UPDATE_UI_MATCHES_TAB',
  UPDATE_UI_SAVE_BTN: 'UPDATE_UI_SAVE_BTN'
};

function storeReducer(state, action) {
  switch(action.type) {
    case actions.UPDATE_SETTINGS:
      console.log(action.payload)
      const {deviceId, username, moneyPerSkin, carrySkins} = action.payload;
      return {...state, settings: {deviceId, username, moneyPerSkin, carrySkins}};
    case actions.UPDATE_USERNAME:
      return {...state, settings: {...state.settings, username: action.payload}};
    case actions.UPDATE_CUR_TOURNEY:
      const [curSavedMatches, prevSavedMatches] = matchService.getCurAndPrevSavedMatches(action.payload._id);
      return {...state, curTourney: action.payload, curSavedMatches, prevSavedMatches};
    case actions.UPDATE_UI_MATCHES_TAB:
      return {...state, ui: {...state.ui, matchesTab: action.payload}};
    case actions.UPDATE_UI_SAVE_BTN:
      console.log(action.payload)
      return {...state, ui: {...state.ui, saveBtnDisabled: action.payload}};


    default:
      console.log('Received unknow action.type', action.type);
      return state;
  }
}

export default storeReducer;
