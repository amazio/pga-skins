import React from 'react';

import {Card, CardContent, CardActions, Typography, Button} from '@material-ui/core';

function TourneyCard({tourney, curTourney}) {
  return (
    tourney ?
      <Card>
        <CardContent>
          <Typography>{tourney.title}</Typography>
        </CardContent>
        { curTourney &&
        <CardActions>
          <Button variant='contained' color='primary'>ADD MATCH</Button>
        </CardActions>
        }
      </Card>
      : <h3>No Tourney</h3>
  );
}

export default TourneyCard;