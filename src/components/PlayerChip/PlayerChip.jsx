import React from 'react';
import { Chip } from '@material-ui/core';
import { Person } from '@material-ui/icons';
import './PlayerChip.css';

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

export default function PlayerChip({ player }) {

  return (
    <Chip
      className='PlayerChip'
      label={`${player.name}\n${formatMoney(player.money)}`}
      icon={<Person />}
      variant='outlined'
    />
  );

}