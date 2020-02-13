const socket = window.io();

/*--- vars to hold useState setters ---*/
let setLeaderboard;


/*--- App component calls these to sub/unsub for updates ---*/
function subscribeToUpdates(setLeaderboard) {
  setLeaderboard = setLeaderboard;
  socket.on('update-leaderboard', notifyUpdateLeaderboard);
}

function unsubscribeToUpdates() {
  socket.off('update-leaderboard', notifyUpdateLeaderboard);
  setLeaderboard = null;
}

/*--- Helper Functions ---*/

function notifyUpdateLeaderboard(lb) {
  if (setLeaderboard) setLeaderboard(lb);
}

export default {
  subscribeToUpdates,
  unsubscribeToUpdates
}