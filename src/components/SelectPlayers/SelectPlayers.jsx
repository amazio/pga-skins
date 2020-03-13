import React from 'react';
import { TextField } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';

export default function SelectPlayers({ leaderboard, onChange }) {
  const options = leaderboard.map(p => ({name: p.name, playerId: p.playerId}));

  return (
    <Autocomplete multiple autoComplete autoHighlight filterSelectedOptions
      options={options}
      getOptionLabel={player => player.name}
      onChange={onChange}
      renderInput={params => (
        <TextField
          {...params}
          variant='outlined'
          label='Select Players'
          margin='normal'
        />
      )}
    />
  );
}