export default {
  getSavedMatches,
  getMatchesByTourneyId,
  getCurAndPrevSavedMatches,
  updateSavedMatch
};

const MATCHES_KEY = 'matches';

function updateSavedMatch(matchDoc) {
  const savedMatches = getSavedMatches();
  const matchIdx = savedMatches.findIndex(m => m._id === matchDoc._id);
  if (matchIdx === -1) {
    savedMatches.push(matchDoc);
  } else {
    savedMatches[matchIdx] = matchDoc;
  }
  window.localStorage.setItem(MATCHES_KEY, JSON.stringify(savedMatches));
}

function getCurAndPrevSavedMatches(curTourneyId) {
  const allSavedMatches = getSavedMatches();
  const curSavedMatches = allSavedMatches.filter(m => m.tourneyId === curTourneyId);
  const prevSavedMatches = allSavedMatches.filter(m => m.tourneyId !== curTourneyId);
  return [curSavedMatches, prevSavedMatches, allSavedMatches];
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