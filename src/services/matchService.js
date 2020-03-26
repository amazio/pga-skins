export default {
  getSavedMatches,
  setSavedMatches,
  // getMatchesByTourneyId,
  // getCurAndPrevSavedMatches,
  updateSavedMatch,
  saveNewMatch,
  deleteMatch
};

const MATCHES_KEY = 'matches';

// Callback used to sort matches
function matchSort(a, b) {
  return (a.createdAt > b.createdAt) ? -1 : 1;
}

// Used to sync with matches that exist on server (may have been deleted)
function setSavedMatches(matches) {
  matches.sort(matchSort);
  window.localStorage.setItem(MATCHES_KEY, JSON.stringify(matches));
}

function deleteMatch(matchId) {
  let savedMatches = getSavedMatches();
  savedMatches = savedMatches.filter(m => m._id !== matchId);
  window.localStorage.setItem(MATCHES_KEY, JSON.stringify(savedMatches));
  return savedMatches;
}

function saveNewMatch(matchDoc) {
  const savedMatches = getSavedMatches();
  savedMatches.unshift(matchDoc);
  savedMatches.sort(matchSort);
  window.localStorage.setItem(MATCHES_KEY, JSON.stringify(savedMatches));
}

function updateSavedMatch(matchDoc) {
  if (!matchDoc) return;
  const savedMatches = getSavedMatches();
  const matchIdx = savedMatches.findIndex(m => m._id === matchDoc._id);
  if (matchIdx === -1) {
    savedMatches.unshift(matchDoc);
    savedMatches.sort(matchSort);
  } else {
    savedMatches[matchIdx] = matchDoc;
  }
  window.localStorage.setItem(MATCHES_KEY, JSON.stringify(savedMatches));
}

// function getMatchesByTourneyId(tourneyId) {
//   const matches = getSavedMatches();
//   return matches.filter(m => m.tourneyId === tourneyId);
// }

function getSavedMatches() {
  let savedMatches = JSON.parse(window.localStorage.getItem(MATCHES_KEY));
  if (!Array.isArray(savedMatches)) {
    // Initialize curMatches to empty array
    window.localStorage.setItem(MATCHES_KEY, '[]');
    savedMatches = [];
  }
  return savedMatches;
}