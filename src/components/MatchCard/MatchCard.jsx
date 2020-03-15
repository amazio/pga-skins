import React from 'react';
import { Card, CardHeader } from '@material-ui/core';

export default function MatchCard({match}) {


  return (
    <Card variant='outlined' className='margin-bottom-1rem'>
      <CardHeader title={match.tourneyTitle} subheader={match.roundNum} />
    </Card>
  );

}