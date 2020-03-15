export default {
  getSavedMatches,
  getMatchesByTourneyId,
  getCurAndPrevSavedMatches,
};

const MATCHES_KEY = 'matches';

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