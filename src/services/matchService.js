import {actions} from '../reducers/store-reducer';

export default {
  init,
  getSavedMatches,
  getMatchesByTourneyId,
  updateCurMatches
};

const MATCHES_KEY = 'matches';
const USERNAME_KEY = 'username';
const DEVICE_KEY = 'deviceId';

// return true if had to initialize (first visit for this user on the device)
function init(dispatch) {
  let deviceId = window.localStorage.getItem(DEVICE_KEY);
  const username = window.localStorage.getItem(USERNAME_KEY);
  if (deviceId) {
    dispatch(actions.UPDATE_USER_DEVICE_INFO, {payload: {deviceId, username}});
    return false;
  } else {
    // First visit on this device!
    deviceId = Date.now() + Math.floor(Math.random() * 1000);
    window.localStorage.setItem(DEVICE_KEY, deviceId);
    dispatch(actions.UPDATE_USER_DEVICE_INFO, {payload: {deviceId, username: ''}});
    // return true so that app will go to welcome screen & get username
    return true;
  }
}

function updateCurMatches(tourney) {
  let matches = getMatchesByTourneyId(tourney._id);
  const lb = tourney.leaderboard;
  // Filter matches to those with updated players
  matches = matches.filter(m => m.players.some(p => {
    // Match has completed
    if (m.completed) return false;
    const lbPlayer = lb.find(lbP => lbP.playerId === p.playerId);
    return p.thru !== lbPlayer.thru;
  }));
  matches.forEach(match => {
    match.players = match.players.map(p => {
      const lbPlayer = lb.find(lbP => lbP.playerId === p.playerId);
      const lbRound = lbPlayer.rounds.find(r => r.num === match.roundNum);
      if (lbRound) p.round = lbRound;
      return p;
    });
    // TODO: computeSkins()
    // TODO: persist on server
  });
  replaceSavedMatches(matches);
}

function replaceSavedMatches(updated) {
  let matches = getSavedMatches();
  matches = matches.map(m => {
    let match = updated.find(u => u._id === m._id);
    return match ? match : m;
  });
  window.localStorage.setItem(MATCHES_KEY, JSON.stringify(matches));
}

function getMatchesByTourneyId(tourneyId) {
  const matches = getSavedMatches();
  return matches.filter(m => m.tourneyId === tourneyId);
}

function getSavedMatches() {
  let savedMatches = JSON.parse(window.localStorage.getItem(MATCHES_KEY));
  if (!Array.isArray(savedMatches)) {
    // Initialize curMatches to empty array
    window.localStorage.setItem(MATCHES_KEY, '[]');
    savedMatches = [];
  }
  return savedMatches;
}