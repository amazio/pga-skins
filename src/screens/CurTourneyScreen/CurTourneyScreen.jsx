import React, { useContext } from 'react';
import StoreProvider from '../../contexts/StoreProvider';

import {Button} from 'rsuite';

function CurTourneyScreen() {
  const {state, dispatch} = useContext(StoreProvider);
  let players = state.curTourney ? 
    state.curTourney.leaderboard.map(p => <div>{p.curPosition} - {p.shortName} - {p.total} thru {p.thru}</div>)
    : <div>LOADING...</div>;
  
  return (
    <section>
      <Button>Hello World</Button>
      {players}
    </section>
  );
}

export default CurTourneyScreen;