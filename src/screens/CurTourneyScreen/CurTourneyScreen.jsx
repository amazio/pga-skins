import React, { useContext } from 'react';
import StoreProvider from '../../contexts/StoreProvider';
import {List, ListItem, ListItemText} from '@material-ui/core';

function CurTourneyScreen() {
  const {state, dispatch} = useContext(StoreProvider);
  const players = state.curTourney ? 
    state.curTourney.leaderboard.map(p => <ListItem><ListItemText>{p.curPosition} - {p.shortName} - {p.total} thru {p.thru}</ListItemText></ListItem>)
    : <ListItem>LOADING...</ListItem>;

  const playerNames = state.curTourney ? 
    state.curTourney.leaderboard.map(p =>
      ({label: p.name, value: p.name})).sort((a, b) => a.name - b.name)
      : [];
  
  return (
    <>
    <List>
      {players}
    </List>
    </>
  );
}

export default CurTourneyScreen;