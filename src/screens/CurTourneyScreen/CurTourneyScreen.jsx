import React, { useContext } from 'react';
import StoreProvider from '../../contexts/StoreProvider';

function CurTourneyScreen() {
  const {state, dispatch} = useContext(StoreProvider);
  const players = state.curTourney ? 
    state.curTourney.leaderboard.map(p => <div>{p.curPosition} - {p.shortName} - {p.total} thru {p.thru}</div>)
    : <div>LOADING...</div>;

  const playerNames = state.curTourney ? 
    state.curTourney.leaderboard.map(p =>
      ({label: p.name, value: p.name})).sort((a, b) => a.name - b.name)
      : [];
  
  return (
    <section>
      {players}
    </section>
  );
}

export default CurTourneyScreen;