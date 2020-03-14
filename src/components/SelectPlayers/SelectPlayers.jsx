import React, { useRef } from 'react';
import { TextField } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';

export default function SelectPlayers({ leaderboard, onChange }) {

  const options = useRef(leaderboard
    .map(p => ({name: p.name, playerId: p.playerId}))
    .sort((p1, p2) => p1.name < p2.name ? -1 : 1));

  return (
    <Autocomplete multiple autoComplete autoHighlight filterSelectedOptions
      style={{width: '100%'}}
      options={options.current}
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