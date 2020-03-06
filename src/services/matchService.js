export default {
  getSavedMatches,
  getMatchesByTourneyId,
  getCurAndPrevSavedMatches
  // updateCurMatches
};

const MATCHES_KEY = 'matches';

function getCurAndPrevSavedMatches(curTourneyId) {
  const allSavedMatches = getSavedMatches();
  const curSavedMatches = allSavedMatches.filter(m => m.tourneyId === curTourneyId);
  const prevSavedMatches = allSavedMatches.filter(m => m.tourneyId !== curTourneyId);
  return [curSavedMatches, prevSavedMatches, allSavedMatches];
}



// function updateCurMatches(tourney) {
//   let matches = getMatchesByTourneyId(tourney._id);
//   const lb = tourney.leaderboard;
//   // Filter matches to those with updated players
//   matches = matches.filter(m => m.players.some(p => {
//     // Match has completed
//     if (m.completed) return false;
//     const lbPlayer = lb.find(lbP => lbP.playerId === p.playerId);
//     return p.thru !== lbPlayer.thru;
//   }));
//   matches.forEach(match => {
//     match.players = match.players.map(p => {
//       const lbPlayer = lb.find(lbP => lbP.playerId === p.playerId);
//       const lbRound = lbPlayer.rounds.find(r => r.num === match.roundNum);
//       if (lbRound) p.round = lbRound;
//       return p;
//     });
//     // TODO: computeSkins()
//     // TODO: persist on server
//   });
//   replaceSavedMatches(matches);
// }

// function replaceSavedMatches(updated) {
//   let matches = getSavedMatches();
//   matches = matches.map(m => {
//     let match = updated.find(u => u._id === m._id);
//     return match ? match : m;
//   });
//   window.localStorage.setItem(MATCHES_KEY, JSON.stringify(matches));
// }

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