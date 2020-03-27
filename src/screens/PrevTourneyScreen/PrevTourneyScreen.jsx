import React, { useContext } from 'react';
import { Typography } from '@material-ui/core';
import StoreProvider from '../../contexts/StoreProvider';
import CenteredSpinner from '../../components/CenteredSpinner/CenteredSpinner';
import TourneyCard from '../../components/TourneyCard/TourneyCard';
import MatchList from '../../components/MatchList/MatchList';

export default function PrevTourneyScreen() {
  const { state } = useContext(StoreProvider);
  let { curTourney, savedMatches: matches } = state;
  let tourneys = [];
  if (curTourney) {
    matches = matches.filter(m => m.tourneyId !== curTourney._id);
    // Extract an array of tourneys from the matches to map over
    tourneys = matches.reduce((acc, m) => acc.some(t => t.tourneyId === m.tourneyId) ?
      acc : [...acc, {tourneyId: m.tourneyId, tourneyTitle: m.tourneyTitle}],
      []
    );
  }

  return (
    curTourney ?
      tourneys.length ?
        tourneys.map(tourney => 
          <>
            <TourneyCard tourney={tourney} isCurTourney={false} />
            <MatchList matches={matches.filter(m => m.tourneyId === tourney.tourneyId)} />
          </>
        )
        :
        <Typography variant='body2' style={{ marginTop: '2rem' }}>You Have No Previous Matches</Typography>
    :
    <CenteredSpinner />
  );
}