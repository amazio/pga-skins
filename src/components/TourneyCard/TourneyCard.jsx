import React, {useContext} from 'react';
import StoreProvider from '../../contexts/StoreProvider';
import {Card, CardContent, Typography} from '@material-ui/core';

function TourneyCard() {
  const {state, dispatch} = useContext(StoreProvider);

  return (
    state.curTourney ?
      <Card>
        <CardContent>
          <Typography>{state.curTourney.title}</Typography>
        </CardContent>
      </Card>
      : <h3>Loading</h3>

  );
}

export default TourneyCard;