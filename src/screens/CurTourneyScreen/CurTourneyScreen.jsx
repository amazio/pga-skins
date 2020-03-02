import React, { useContext } from 'react';
import StoreProvider from '../../contexts/StoreProvider';
import {List, ListItem, ListItemText} from '@material-ui/core';
import TourneyCard from '../../components/TourneyCard/TourneyCard';

function CurTourneyScreen() {
  const {state, dispatch} = useContext(StoreProvider);
  const players = state.curTourney ? 
    state.curTourney.leaderboard.map(p => <ListItem><ListItemText>{p.curPosition} - {p.shortName} - {p.total} thru {p.thru}</ListItemText></ListItem>)
    : <ListItem>LOADING...</ListItem>;

  const playerNames = state.curTourney ? 
    state.curTourney.leaderboard
      .sort((a, b) => a.name - b.name)
      .map(p =>({label: p.name, value: p.name}))
    : [];
  
  return (
    <>
      <TourneyCard />
    </>
  );
}

export default CurTourneyScreen;