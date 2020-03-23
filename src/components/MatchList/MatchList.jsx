import React from 'react';
import { Link } from 'react-router-dom';
import MatchItem from '../MatchItem/MatchItem';

export default function MatchList({matches, tourneyRound}) {
  
  return (
    <>
      {matches.map(m => <Link to={`/matches/${m._id}`}  key={m._id}><MatchItem match={m} tourneyRound={tourneyRound} /></Link>)}
    </>
  );

}