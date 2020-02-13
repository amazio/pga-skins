const socket = window.io();

/*--- vars to hold useState setters ---*/
let setTourneyFn;


/*--- App component calls these to sub/unsub for updates ---*/
function subscribeToUpdates(setTourney) {
  setTourneyFn = setTourney;
  socket.on('update-tourney', notifyUpdateTourney);
}

function unsubscribeToUpdates() {
  socket.off('update-tourney', notifyUpdateTourney);
  setTourneyFn = null;
}

/*--- Helper Functions ---*/

function notifyUpdateTourney(tourney) {
  if (setTourneyFn) setTourneyFn(tourney);
}

export default {
  subscribeToUpdates,
  unsubscribeToUpdates
}