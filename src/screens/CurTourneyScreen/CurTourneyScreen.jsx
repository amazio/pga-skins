import React, { useContext } from 'react';
import StoreProvider from '../../contexts/StoreProvider';
import { Typography } from '@material-ui/core';
import CenteredSpinner from '../../components/CenteredSpinner/CenteredSpinner';
import TourneyCard from '../../components/TourneyCard/TourneyCard';
import MatchList from '../../components/MatchList/MatchList';

export default function CurTourneyScreen() {
  const { state } = useContext(StoreProvider);
  const { curTourney, curSavedMatches: matches } = state;

  return (
    curTourney ?
      <>
        <TourneyCard tourney={curTourney} isCurTourney={true} />
        {
          matches.length ?
            <MatchList matches={matches} tourneyRound={curTourney.roundNum}/>
            :
            <Typography variant='body1' style={{ marginTop: '2rem' }}>You Have No Matches</Typography>
        }
      </>
      :
      <CenteredSpinner />
  );
}