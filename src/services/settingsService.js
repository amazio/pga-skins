import { actions } from '../reducers/store-reducer';

export default {
  init,
  updateUsername
};

const SETTINGS_KEY = 'settings';
const USERNAME_SUBKEY = 'username';
const DEVICE_SUBKEY = 'deviceId';
const MONEY_PER_SKIN_SUBKEY = 'moneyPerSkin';
const CARRY_SKINS_SUBKEY = 'carrySkins';

function updateUsername(username, dispatch) {
  dispatch({type: actions.UPDATE_USERNAME, payload: username});
  let settings = JSON.parse(window.localStorage.getItem(SETTINGS_KEY));
  settings[USERNAME_SUBKEY] = username;
  window.localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
}

// return true if had to initialize (first visit for this user on the device)
function init(dispatch) {
  let settings = JSON.parse(window.localStorage.getItem(SETTINGS_KEY));
  if (settings) {
    const deviceId = settings[DEVICE_SUBKEY];
    const username = settings[USERNAME_SUBKEY];
    const moneyPerSkin = settings[MONEY_PER_SKIN_SUBKEY];
    const carrySkins = settings[CARRY_SKINS_SUBKEY];
    dispatch({type: actions.UPDATE_SETTINGS, payload: {deviceId, username, moneyPerSkin, carrySkins}});
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