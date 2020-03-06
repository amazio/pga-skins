import React, { useContext } from 'react';
import StoreProvider from '../../contexts/StoreProvider';
import CenteredSpinner from '../../components/CenteredSpinner/CenteredSpinner';
import TourneyCard from '../../components/TourneyCard/TourneyCard';

function CurTourneyScreen() {
  const { state } = useContext(StoreProvider);

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
    state.curTourney ?
      <>
        <TourneyCard tourney={state.curTourney} curTourney={true} />
      </>
      :
      <CenteredSpinner />
  );
}

export default CurTourneyScreen;