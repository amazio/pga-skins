import settingsService from '../services/settingsService';
import matchService from '../services/matchService';

const settings = settingsService.getSettings();
const [curSavedMatches, prevSavedMatches] = matchService.getCurAndPrevSavedMatches();

export const initialState = {
  settings: settings || {
    deviceId: '',
    username: '',
    moneyPerSkin: 0,
    carrySkins: true
  },
  curTourney: null,
  curSavedMatches: curSavedMatches,
  prevSavedMatches: prevSavedMatches,
  newMatchData: {},
  viewingMatch: null,
  ui: {
    matchesTab: 'current',
    saveBtnDisabled: false
  }
};

export const actions = {
  UPDATE_SETTINGS: 'UPDATE_SETTINGS',
  UPDATE_USERNAME: 'UPDATE_USERNAME',
  UPDATE_CUR_TOURNEY: 'UPDATE_CUR_TOURNEY',
  UPDATE_NEW_MATCH_DATA: 'UPDATE_NEW_MATCH_DATA',
  UPDATE_VIEWING_MATCH: 'UPDATE_VIEWING_MATCH',
  SET_ALL_MATCHES: 'SET_ALL_MATCHES',
  STOP_VIEWING_MATCH: 'STOP_VIEWING_MATCH',
  UPDATE_UI_MATCHES_TAB: 'UPDATE_UI_MATCHES_TAB',
  UPDATE_UI_SAVE_BTN: 'UPDATE_UI_SAVE_BTN'
};

function storeReducer(state, action) {
  let curSavedMatches, prevSavedMatches;
  switch(action.type) {
    case actions.UPDATE_SETTINGS:
      return {...state, settings: {...state.settings, ...action.payload}};
    case actions.UPDATE_USERNAME:
      return {...state, settings: {...state.settings, username: action.payload}};
    case actions.UPDATE_CUR_TOURNEY:
      [curSavedMatches, prevSavedMatches] = matchService.getCurAndPrevSavedMatches(action.payload._id);
      return {...state, curTourney: action.payload, curSavedMatches, prevSavedMatches};
    case actions.UPDATE_NEW_MATCH_DATA:
      return {...state, newMatchData: {...state.newMatchData, ...action.payload}};
    case actions.UPDATE_VIEWING_MATCH:
      matchService.updateSavedMatch(action.payload);
      // Ensure that match is being viewed before updating
      const path = window.location.pathname;
      const matchId = path.substring(path.lastIndexOf('/') + 1);
      return matchId === action.payload._id ?
        {...state, viewingMatch: action.payload}
        :
        state;
    case actions.SET_ALL_MATCHES:
      matchService.setSavedMatches(action.payload);
      if (state.curTourney) {
        [curSavedMatches, prevSavedMatches] = matchService.getCurAndPrevSavedMatches(state.curTourney._id);
        return {...state, curSavedMatches, prevSavedMatches};
      } else {
        return {...state};
      }
    case actions.STOP_VIEWING_MATCH:
      return {...state, viewingMatch: null};
    case actions.UPDATE_UI_MATCHES_TAB:
      return {...state, ui: {...state.ui, matchesTab: action.payload}};
    case actions.UPDATE_UI_SAVE_BTN:
      return {...state, ui: {...state.ui, saveBtnDisabled: action.payload}};
    default:
      console.log('Received unknow action.type', action.type);
      return state;
  }
}

export default storeReducer;
