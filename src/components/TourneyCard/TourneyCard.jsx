import React from 'react';
import { Card, CardHeader } from '@material-ui/core';

export default function TourneyCard({tourney, isCurTourney}) {
  const { isStarted, isFinished, startDate, curRound, roundState } = tourney;

  function getStatus() {
    if (isFinished) {
      return 'Tourney Completed';
    } else if (isStarted) {
      return `Round ${curRound} ${roundState}`;
    } else {
      return `Starts on ${startDate}`;
    }
  }

  return (
    <Card variant='outlined' className='margin-bottom-1rem'>
      <CardHeader title={tourney.title} subheader={getStatus()} />
    </Card>
  );
}