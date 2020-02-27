import React, { useContext } from 'react';
import StoreProvider from '../../contexts/StoreProvider';

import {Content, TagPicker} from 'rsuite';

function CurTourneyScreen() {
  const {state, dispatch} = useContext(StoreProvider);
  const players = state.curTourney ? 
    state.curTourney.leaderboard.map(p => <div>{p.curPosition} - {p.shortName} - {p.total} thru {p.thru}</div>)
    : <div>LOADING...</div>;

  const playerNames = state.curTourney ? 
    state.curTourney.leaderboard.map(p => ({label: p.name, value: p.name}))
    : [];
  
  return (
    <Content>
      <TagPicker data={playerNames} style={{width: '100%'}} />
      {players}
    </Content>
  );
}

export default CurTourneyScreen;