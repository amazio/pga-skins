import React from 'react';
import { Card, CardActions, CardHeader, Button } from '@material-ui/core';
import { Add } from '@material-ui/icons';

export default function TourneyCard({ tourney }) {
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
      {!isFinished &&
        <CardActions>
          <Button variant='contained' startIcon={<Add />} size='small' color='primary'>
            MATCH
          </Button>
        </CardActions>
      }
    </Card>
  );
}