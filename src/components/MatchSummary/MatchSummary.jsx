import React from 'react';
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell } from '@material-ui/core';
import './MatchSummary.css';

function getInitials(name) {
  const lastInitial = name[name.lastIndexOf(' ') + 1];
  return `${name[0]}${lastInitial}`.toUpperCase();
}

const up = '▲';
const down = '▼';

function formatMoney(money) {
  const absMoney = Math.abs(money);
  if (money < 0) {
    return ` ${down}$${absMoney}`;
  } else if (money > 0) {
    return ` ${up}$${absMoney}`;
  } else {
    return ` $${absMoney}`;
  }
}

export default function MatchSummary({ match }) {
  const players = match.players.map(p => ({
    name: p.name,
    initials: getInitials(p.name),
    money: p.money,
    numSkins: p.round.holes.reduce((skins, hole) => hole.skin || hole.carry ? skins + 1 : skins, 0)
  }));

  return (
    <TableContainer className='MatchSummary'>
      <Table id='match-summary-table' size='small'>
        <TableHead>
          <TableRow>
            <TableCell colSpan={2}>Player</TableCell>
            <TableCell align='center'>Skins</TableCell>
            <TableCell align='center'>Money</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {players.map(p =>
            <TableRow key={p.name}>
              <TableCell align='center'>{p.initials}</TableCell>
              <TableCell>{p.name}</TableCell>
              <TableCell align='center'>{p.numSkins}</TableCell>
              <TableCell align='center'>{formatMoney(p.money)}</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );

}