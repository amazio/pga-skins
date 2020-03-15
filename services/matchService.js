const Match = require('../models/match');

module.exports = {
  create,
  computeSkins
};

function create(matchData) {
  return Match.create(matchData);
}

function computeSkins(matchData, leaderboard) {
  matchData.players = matchData.selectedPlayerIds.map(pId => ({...leaderboard.find(p => p.playerId === pId)}));
  delete matchData.selectedPlayerIds;
  matchData.players = matchData.players.map(p => {
    p.round = p.rounds[parseInt(matchData.roundNum) - 1];
    delete p.rounds;
    return p;
  });
  if (matchData.players.some(p => p.round === undefined)) return;
  for (let holeIdx = 0; holeIdx < 18; holeIdx++) {
    updateHoleForSkins(matchData.players, holeIdx);
  }
  if (matchData.carrySkins) updateMatchForCarrys(matchData.players);
}

function updateMatchForCarrys(players) {
  const rounds = players.map(p => p.round.holes);
  let activeCarryRound = undefined;
  for (let holeIdx = 17; holeIdx >= 0; holeIdx--) {
    const roundWithSkin = rounds.find(r => r[holeIdx].skin);
    if (roundWithSkin !== undefined) {
      activeCarryRound = roundWithSkin;
    } else if (activeCarryRound !== undefined) {
      activeCarryRound[holeIdx].carry = true;
    }
  }
}

function updateHoleForSkins(players, holeIdx) {
  const holes = players.map(p => p.round.holes[holeIdx]);
  if (holes.some(h => h.strokes === null)) return;
  const lowScore = Math.min(...holes.map(h => h.strokes));
  const countOfLow = holes.reduce((count, h) => h.strokes === lowScore ? count + 1 : count, 0);
  if (countOfLow === 1) {
    const hole = holes.find(h => h.strokes === lowScore);
    hole.skin = true;
  }
}
