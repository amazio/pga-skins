import React from 'react';
import { Card, CardHeader, Typography } from '@material-ui/core';
import MatchGrid from '../../components/MatchGrid/MatchGrid';
import './MatchCard.css';

export default function MatchCard({match, tourneyRound}) {

  let statusMsg;
  if (match.completed) {
    statusMsg = 'completed'
  } else if (match.roundNum === tourneyRound) {
    statusMsg = 'in progress'
  } else {
    statusMsg = 'pending'
  }
  let createdMsg = new Date(match.createdAt).toLocaleString().split('');
  createdMsg.splice(createdMsg.length - 6, 3).join('');
  let subHeader = <>
    <span>{`Round ${match.roundNum}`}</span><br/>
    <span>${`${match.moneyPerSkin}/skin (${statusMsg})`}</span>
  </>;

  return (
    <>
      <CardHeader title={match.tourneyTitle} subheader={subHeader} />
      <MatchGrid match={match} />
      <Typography variant='caption' id='MatchCard-created-by'>Created by {match.username} on {createdMsg}</Typography>
    </>
  );

}