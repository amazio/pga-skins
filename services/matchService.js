// const io = require('../io');
const messages = require('./socketMessages');
const Match = require('../models/match');

const viewingMatchesForCurTourney = {};

module.exports = {
  create,
  computeSkins,
  addMatchToViewing,
  getMatchViewing,
  removeMatchFromViewing,
  deleteMatch,
  deleteMatches,
  cleanupAndGetAllMatchesBeingViewed,
  notifyClientsOfUpdatedMatch,
  getAllMatchesForIds
};

function getAllMatchesForIds(matchIds) {
  return Match.find({}).where('_id').in(matchIds).exec();
}

function notifyClientsOfUpdatedMatch(match) {
  global.io.to(match.id).emit(messages.UPDATE_VIEWING_MATCH, match);
}

function cleanupAndGetAllMatchesBeingViewed(tourneyId) {
  // Before returning matches being viewed for the currently
  // updated tourney, remove any stragler matches not for cur tourney
  const matches = Object.values(viewingMatchesForCurTourney);
  for (let match of matches) {
    if ( !match.tourneyId.equals(tourneyId)) delete viewingMatchesForCurTourney[match._id.toString()];
  }
  return matches;
}

function removeMatchFromViewing(matchId) {
  console.log(`Removing match ${matchId} from viewing`);
  delete viewingMatchesForCurTourney[matchId];
}

function deleteMatch(matchId) {
  removeMatchFromViewing(matchId);
  Match.findByIdAndDelete(matchId).then(() => {});
}

async function deleteMatches(matches, deviceId) {
  matches.forEach(m => removeMatchFromViewing(m._id));
  await Match.deleteMany({_id: matches, deviceId});
}

async function getMatchViewing(matchId, curTourney) {
  if (viewingMatchesForCurTourney[matchId]) return Promise.resolve(viewingMatchesForCurTourney[matchId]);
  const matchDoc = await Match.findById(matchId);
  // Only add if match requested is for cur tourney (going to be updated)
  if (matchDoc && matchDoc.tourneyId.equals(curTourney._id)) {
    computeSkins(matchDoc, curTourney);
    addMatchToViewing(matchDoc);
  }
  return Promise.resolve(matchDoc);
}

function addMatchToViewing(matchDoc) {
  viewingMatchesForCurTourney[matchDoc.id] = matchDoc;
  console.log(`matchService.addMatchToViewing - ${matchDoc.id}`);
}

function create(matchData) {
  return Match.create(matchData);
}

function computeSkins(matchData, leaderboard) {
  matchData.players = matchData.players.map(player => {
    const lbPlayer = leaderboard.find(p => p.playerId === player.playerId);
    return {
      ...lbPlayer,
      round: lbPlayer.rounds[parseInt(matchData.roundNum) - 1]
    }
  });
  if (matchData.players.some(p => !p.round)) return;
  for (let holeIdx = 0; holeIdx < 18; holeIdx++) {
    updateHoleForSkins(matchData.players, holeIdx);
  }
  if (matchData.carrySkins) {
    updateMatchForCarrys(matchData.players);
  } else {
    // clear all carries
    matchData.players.forEach(p => {
      p.round.holes.forEach(h => h.carry = false);
    });
  }
  // computeMoney returns the whether or not the match is complete
  matchData.completed = computeMoney(matchData.players, matchData.moneyPerSkin);
}

function computeMoney(players, moneyPerSkin) {
  const numPlayers = players.length;
  const playersHoles = players.map(p => p.round.holes);
  const playerTotals = playersHoles.map(playerHoles => playerHoles.reduce((count, h) => h.skin || h.carry ? count + 1 : count, 0));
  const totalSkins = playerTotals.reduce((count, playerTotal) => count + playerTotal, 0);
  players.forEach((player, idx) => {
    player.money = ((playerTotals[idx] * numPlayers) - totalSkins) * moneyPerSkin;
  });
  // return whether or not the match is completed
  return !playersHoles.some(playerHoles => playerHoles.some(h => !h.strokes));
}

function updateMatchForCarrys(players) {
  const rounds = players.map(p => p.round.holes);
  let activeCarryRound = undefined;
  for (let holeIdx = 17; holeIdx >= 0; holeIdx--) {
    const roundWithSkin = rounds.find(r => r[holeIdx].skin);
    if (roundWithSkin) {
      activeCarryRound = roundWithSkin;
    } else if (activeCarryRound !== undefined) {
      activeCarryRound[holeIdx].carry = true;
    }
  }
}

function updateHoleForSkins(players, holeIdx) {
  const holes = players.map(p => p.round.holes[holeIdx]);
  holes.forEach(h => h.strokes = parseInt(h.strokes) || 0);
  if (holes.some(h => !h.strokes)) return;
  const lowScore = Math.min(...holes.map(h => h.strokes));
  const countOfLow = holes.reduce((count, h) => h.strokes === lowScore ? count + 1 : count, 0);
  if (countOfLow === 1) {
    const hole = holes.find(h => h.strokes === lowScore);
    hole.skin = true;
  }
}
