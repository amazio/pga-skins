export default {
  computeSkins
};

function computeSkins(players) {
  for (let holeIdx = 17; holeIdx >= 0; holeIdx--) {
    if (players.some(p => isNull(p.round.holes[holeIdx]))) continue;
  }
}