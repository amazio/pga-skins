import React from 'react';
import { Typography, Card } from '@material-ui/core';
import './MatchItem.css';
import PlayerChip from '../PlayerChip/PlayerChip';

export default function MatchItem({match, tourneyRound}) {
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
  
  return (
    <Card variant='outlined' className='MatchItem-Card'>
      <section>
        <Typography variant='h5' component='h2'>Round {match.roundNum}</Typography>
        <article>
          <Typography variant='overline'>
            ${match.moneyPerSkin}/skin ({statusMsg})
          </Typography>
        </article>
      </section>
      <section>
        {match.players.map(p => <PlayerChip player={p} />)}
      </section>
      <section>
        <Typography variant='caption'>Created by {match.username} on {createdMsg}</Typography>
      </section>
      
      

    </Card>
  );

}