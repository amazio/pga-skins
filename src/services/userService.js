import {actions} from '../reducers/store-reducer';

export default {
  init,
  updateUsername
};

const USERNAME_KEY = 'username';
const DEVICE_KEY = 'deviceId';

function updateUsername(username, dispatch) {
  dispatch({type: actions.UPDATE_USERNAME, payload: username});
  window.localStorage.setItem(USERNAME_KEY, username);
}

// return true if had to initialize (first visit for this user on the device)
function init(dispatch) {
  let deviceId = window.localStorage.getItem(DEVICE_KEY);
  const username = window.localStorage.getItem(USERNAME_KEY);
  if (deviceId) {
    dispatch({type: actions.UPDATE_USER_DEVICE_INFO, payload: {deviceId, username}});
    return false;
  } else {
    // First visit on this device!
    deviceId = Date.now() + Math.floor(Math.random() * 1000);
    window.localStorage.setItem(DEVICE_KEY, deviceId);
    dispatch({type: actions.UPDATE_USER_DEVICE_INFO, payload: {deviceId, username: ''}});
    // return true so that app will go to welcome screen & get username
    return true;
  }
}