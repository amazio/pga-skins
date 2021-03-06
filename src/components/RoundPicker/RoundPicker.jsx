import React from 'react';
import { styled } from '@material-ui/core/styles';
import { FormControl, FormControlLabel, FormLabel, RadioGroup, Radio } from '@material-ui/core';

const HorizontalRadioGroup = styled(RadioGroup)({
  flexDirection: 'row'
});

export default function RoundPicker({round, onChange}) {
  if (!round || !onChange) return null;
  return (
    round ?
      <FormControl component='fieldset'>
        <FormLabel component='legend'>Round</FormLabel>
        <HorizontalRadioGroup value={'' + round} onChange={onChange}>
          <FormControlLabel value='1' control={<Radio color='primary'/>} label='1' />
          <FormControlLabel value='2' control={<Radio color='primary'/>} label='2' />
          <FormControlLabel value='3' control={<Radio color='primary'/>} label='3' />
          <FormControlLabel value='4' control={<Radio color='primary'/>} label='4' />
        </HorizontalRadioGroup>
      </FormControl>
    :
      null
  );
}