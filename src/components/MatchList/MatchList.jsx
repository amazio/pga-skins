import React from 'react';
import MatchItem from '../MatchItem/MatchItem';

export default function MatchList({matches, tourneyRound}) {
  
  return (
    <>
      {matches.map(m => <MatchItem match={m} tourneyRound={tourneyRound}/>)}
    </>
  );

}