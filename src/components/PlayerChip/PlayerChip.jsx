import React from 'react';
import { Chip } from '@material-ui/core';
import { PersonOutline } from '@material-ui/icons';

export default function PlayerChip({ player }) {

  return (
    <Chip label={player.name} icon={<PersonOutline />} variant='outlined' />
  );

}