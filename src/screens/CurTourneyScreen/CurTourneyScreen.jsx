import React, { useState, useContext, useEffect } from 'react';
import StoreProvider from '../../contexts/StoreProvider';
import { List, ListItem, ListItemText } from '@material-ui/core';
import TourneyCard from '../../components/TourneyCard/TourneyCard';

function CurTourneyScreen() {
  const { state } = useContext(StoreProvider);
  const {curTourney} = state;
  // const [curTourney, setCurTourney] = useState(null);
  let playerNames;

  // useEffect(function () {
  //   if (state.then) state.then(s => setCurTourney(s.curTourney));
    // playerNames = state.curTourney ?
    //   state.curTourney.leaderboard
    //     .sort((a, b) => a.name - b.name)
    //     .map(p => ({ label: p.name, value: p.name }))
    //   : [];

    // console.log(playerNames)
  // }, [state]);

  return (
    <>
      <TourneyCard tourney={curTourney} curTourney={true} />
    </>
  );
}

export default CurTourneyScreen;