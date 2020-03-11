import React, { useState } from 'react';
import { Card, CardActions, CardHeader, Button } from '@material-ui/core';
import SelectRoundDialog from '../../components/SelectRoundDialog/SelectRoundDialog';
import { Add } from '@material-ui/icons';

export default function TourneyCard({tourney, isCurTourney}) {
  const { isStarted, isFinished, startDate, curRound, roundState } = tourney;
  const [showDialog, setShowDialog] = useState(false);

  function handleSelectedRound(round) {
    console.log('selected round', round)
    setShowDialog(false);
  }

  function handleOpenSelectRound() {
    setShowDialog(true);
  }

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
    <>
      <Card variant='outlined' className='margin-bottom-1rem'>
        <CardHeader title={tourney.title} subheader={getStatus()} />
        {isCurTourney &&
          <CardActions>
            <Button onClick={handleOpenSelectRound} variant='contained' startIcon={<Add />} size='small' color='primary'>
              MATCH
            </Button>
          </CardActions>
        }
      </Card>
      <SelectRoundDialog
        tourney={tourney}
        open={showDialog}
        handleSelectedRound={handleSelectedRound}
        cancel={() => setShowDialog(false)}
      />
    </>
  );
}