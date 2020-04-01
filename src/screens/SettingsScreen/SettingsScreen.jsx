import React, { useContext } from 'react';
import StoreProvider from '../../contexts/StoreProvider';
import { actions } from '../../reducers/store-reducer';
import { Typography, CardHeader, CardContent, TextField, FormControlLabel, Switch } from '@material-ui/core';

export default function SettingsScreen() {
  const {state, dispatch} = useContext(StoreProvider);
  const {settings: {username, moneyPerSkin, carrySkins}} = state;

  function handleChangeMoney(e) {
    dispatch({type: actions.UPD, payload: {moneyPerSkin: e.target.value ? parseInt(e.target.value) : ''}});
  }
  
  function handleChangeCarry(e) {
    if (e.target) dispatch({type: actions.UPDA, payload: {carrySkins: e.target.checked}});
  }

  return (
    <>
    <CardHeader title='Settings' />
    <CardContent className='flex-col-ctr'>
      <Typography variant='h5'>New Match Defaults:</Typography>
      <TextField label='Money Per Skin' type='number' variant='outlined' min='1' step='1' margin='normal'
        value={moneyPerSkin} onChange={handleChangeMoney} color='primary'
        id='NewMatchScreen_money_input'
      />
      <FormControlLabel margin='normal' label='Carry Over Skins?' className='MuiFormLabel-root'
        control={<Switch value='carrySkins' checked={carrySkins} onChange={handleChangeCarry} color='primary' />}
      />
      <Typography variant='h5'>Other Settings:</Typography>

    </CardContent>
  </>

  );
}