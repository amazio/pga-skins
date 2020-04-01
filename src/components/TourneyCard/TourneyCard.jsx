import React from 'react';
import { CardHeader } from '@material-ui/core';

export default function TourneyCard({tourney, isCurTourney}) {
  const { isStarted, isFinished, startDate, curRound, roundState } = tourney;

  function getStatus() {
    if (isFinished || !isCurTourney) {
      return 'Tourney Completed';
    } else if (isStarted) {
      return `Round ${curRound} ${roundState}`;
    } else {
      return `Starts on ${startDate}`;
    }
  }

  return (
    <CardHeader title={tourney.title} subheader={getStatus()} className='margin-bottom-1rem'/>
  );
}