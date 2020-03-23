import React from 'react';
import { Typography } from '@material-ui/core';
import './MatchGrid.css';

function getInitials(name) {
  const lastInitial = name[name.lastIndexOf(' ') + 1];
  return `${name[0]}${lastInitial}`.toUpperCase();
}

export default function MatchGrid({match}) {
  const pars = match.players[0].round.holes.map((h, idx) => ({holeNum: idx + 1, par: h.par}));
  const frontPars = pars.filter(p => p.holeNum < 10);
  const backPars = pars.filter(p => p.holeNum > 9);
  const skins = match.players.map(p => ({
    name: p.name,
    holes: p.round.holes.map(h =>
      <div className='player-hole-container flex-col-ctr'>
        <span className='player-hole flex-col-ctr' style={{
          color: 'var(--dark-green-text)',
          borderColor: (h.skin || h.carry) &&  'var(--light-green)',
          backgroundColor: h.skin && 'var(--pale-green-bg)'
        }}>
          {h.strokes}
        </span>
      </div>
    )}
  ));
  return (
    <main id='match-grid'>
      <span></span>
      {frontPars.map(par => <Typography variant='caption' key={par.holeNum} className='hole'>{par.holeNum}<br/><span className='par'>{par.par}</span></Typography>)}
      {skins.map((p) => (
        <>
          <div className='MatchGrid-initials flex-col-ctr'>{getInitials(p.name)}</div>
          {p.holes.filter((_, idx) => idx < 9)}
        </>
      ))}
      {new Array(10).fill(null).map(_ => <div className='MatchGrid-spacer'></div>)}
      <span></span>
      {backPars.map(par => <Typography variant='caption' key={par.holeNum} className='hole'>{par.holeNum}<br/><span className='par'>{par.par}</span></Typography>)}
      {skins.map((p) => (
        <>
          <div className='MatchGrid-initials flex-col-ctr'>{getInitials(p.name)}</div>
          {p.holes.filter((_, idx) => idx > 8)}
        </>
      ))}
    </main>
  );
}