import { actions } from '../reducers/store-reducer';

export default {
  initialize,
  getSettings,
  updateUsername
};

const SETTINGS_KEY = 'settings';
const USERNAME_SUBKEY = 'username';
const DEVICE_SUBKEY = 'deviceId';
const MONEY_PER_SKIN_SUBKEY = 'moneyPerSkin';
const CARRY_SKINS_SUBKEY = 'carrySkins';

function getSettings() {
  return JSON.parse(window.localStorage.getItem(SETTINGS_KEY));
}

function updateUsername(username, dispatch) {
  let settings = JSON.parse(window.localStorage.getItem(SETTINGS_KEY));
  settings[USERNAME_SUBKEY] = username;
  window.localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
  dispatch({type: actions.UPDATE_USERNAME, payload: username});
}

// return true if had to initialize (first visit for this user on the device)
function initialize(dispatch) {
  let settings = JSON.parse(window.localStorage.getItem(SETTINGS_KEY));
  // FYI, store-reducer would have already set the initialState from the current settings
  if (settings) {
    return false;
  } else { 
    // First visit on this device!
    settings = {};
    const deviceId = Date.now() + Math.floor(Math.random() * 1000);
    settings[DEVICE_SUBKEY] = deviceId;
    const username = '';
    settings[USERNAME_SUBKEY] = username;
    const moneyPerSkin = 5;
    settings[MONEY_PER_SKIN_SUBKEY] = moneyPerSkin;
    const carrySkins = true;
    settings[CARRY_SKINS_SUBKEY] = carrySkins;
    window.localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
    dispatch({type: actions.UPDATE_SETTINGS, payload: {deviceId, username, moneyPerSkin, carrySkins}});
    // return true so that app will go to welcome screen & get username
    return true;
  }
}