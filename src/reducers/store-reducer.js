import settingsService from '../services/settingsService';
import matchService from '../services/matchService';
import realtimeService from '../services/realtimeService';

const settings = settingsService.getSettings();
const savedMatches = matchService.getSavedMatches();

export const initialState = {
  settings: settings || {
    deviceId: '',
    username: '',
    moneyPerSkin: 0,
    carrySkins: true
  },
  curTourney: null,
  savedMatches,
  formData: {},
  viewingMatch: null,
  ui: {
    matchesTab: 'current',
    saveBtnDisabled: false,
    rerenderCount: 0
  }
};

export const actions = {
  UPDATE_SETTINGS: 'UPDATE_SETTINGS',
  UPDATE_USERNAME: 'UPDATE_USERNAME',
  UPDATE_CUR_TOURNEY: 'UPDATE_CUR_TOURNEY',
  UPDATE_FORM_DATA: 'UPDATE_FORM_DATA',
  UPDATE_VIEWING_MATCH: 'UPDATE_VIEWING_MATCH',
  CREATE_MATCH: 'CREATE_MATCH',
  DELETE_MATCH: 'DELETE_MATCH',
  SET_ALL_MATCHES: 'SET_ALL_MATCHES',
  STOP_VIEWING_MATCH: 'STOP_VIEWING_MATCH',
  UPDATE_UI_MATCHES_TAB: 'UPDATE_UI_MATCHES_TAB',
  UPDATE_UI_SAVE_BTN: 'UPDATE_UI_SAVE_BTN',
  RECONNECT: 'RECONNECT',
  RERENDER: 'RERENDER'
};

function storeReducer(state, action) {
  switch (action.type) {
    case actions.UPDATE_SETTINGS:
      settingsService.updateSettings(action.payload);
      return { ...state, settings: { ...state.settings, ...action.payload } };
    case actions.UPDATE_USERNAME:
      return { ...state, settings: { ...state.settings, username: action.payload } };
    case actions.UPDATE_CUR_TOURNEY:
      return { ...state, curTourney: action.payload };
    case actions.UPDATE_FORM_DATA:
      return { ...state, formData: { ...state.formData, ...action.payload } };
    case actions.UPDATE_VIEWING_MATCH:
      matchService.updateSavedMatch(action.payload);
      const matches = matchService.getSavedMatches();
      return { ...state, viewingMatch: action.payload, savedMatches: matches };
    case actions.SET_ALL_MATCHES:
      matchService.setSavedMatches(action.payload);
      return { ...state, savedMatches: action.payload };
    case actions.STOP_VIEWING_MATCH:
      return { ...state, viewingMatch: null };
    case actions.CREATE_MATCH:
      matchService.saveNewMatch(action.payload);
      const savedMatches = matchService.getSavedMatches();
      return { ...state, viewingMatch: action.payload, savedMatches, formData: {} };
    case actions.DELETE_MATCH:
      const updatedSavedMatches = matchService.deleteMatch(action.payload);
      return { ...state, savedMatches: updatedSavedMatches, viewingMatch: null };
    case actions.UPDATE_UI_MATCHES_TAB:
      return { ...state, ui: { ...state.ui, matchesTab: action.payload } };
    case actions.UPDATE_UI_SAVE_BTN:
      return { ...state, ui: { ...state.ui, saveBtnDisabled: action.payload } };
    case actions.RECONNECT:
      if (state.viewingMatch) realtimeService.viewMatch(state.viewingMatch._id, null);
      return state;
    case actions.RERENDER:
      return { ...state, ui: { ...state.ui, rerenderCount: state.ui.rerenderCount + 1 } };
    default:
      console.log('Received unknow action.type', action.type);
      return state;
  }
}

export default storeReducer;
