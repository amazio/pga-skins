import React, { useState, useEffect, useContext } from 'react';
import StoreProvider from '../../contexts/StoreProvider';
import { actions } from '../../reducers/store-reducer';
import { Typography, CardHeader, CardContent, TextField, FormControlLabel, Switch } from '@material-ui/core';

export default function SettingsScreen() {
  const {state, dispatch} = useContext(StoreProvider);
  const {settings: {username, moneyPerSkin, carrySkins}} = state;
  const [formData, setFormData] = useState({username, moneyPerSkin, carrySkins});
  
  function formInvalid() {
    if (JSON.stringify({username, moneyPerSkin, carrySkins}) === JSON.stringify(formData)) return true;
    return formData.moneyPerSkin === '' || formData.moneyPerSkin <= 0 || formData.username.length < 3;
  }

  useEffect(function() {
    dispatch({type: actions.UPDATE_FORM_DATA, payload: formData});
  }, [formData, dispatch]);

  const disableSaveBtn = formInvalid();

  useEffect(function() {
    dispatch({type: actions.UPDATE_UI_SAVE_BTN, payload: disableSaveBtn});
  }, [disableSaveBtn, dispatch]);


  function handleChangeMoney(e) {
    setFormData({...formData, moneyPerSkin: parseInt(e.target.value) || ''});
  }
  
  function handleChangeCarry(e) {
    setFormData({...formData, carrySkins: e.target.checked});
  }
  
  function handleChangeUsername(e) {
    setFormData({...formData, username: e.target.value});
  }

  return (
    <main className='max-screen-width margin-left-right-auto'>
      <CardHeader title='Settings' />
      <CardContent className='flex-col-ctr'>
        <Typography variant='caption' className='flex-item-left'>New Match Defaults:</Typography>
        <TextField label='Money Per Skin' type='number' variant='outlined' min='1' step='1' margin='normal'
          value={formData.moneyPerSkin} onChange={handleChangeMoney} color='primary'
          id='money-per-skin-input'
        />
        <FormControlLabel margin='normal' label='Carry Over Skins?' className='MuiFormLabel-root'
          control={<Switch value='formData.carrySkins' checked={formData.carrySkins} onChange={handleChangeCarry} color='primary' />}
        />
        <Typography variant='caption' className='flex-item-left margin-top-2rem'>Other Settings:</Typography>
        <TextField label='Username' variant='outlined' margin='normal'
          value={formData.username} onChange={handleChangeUsername} color='primary'
        />
      </CardContent>
    </main>
  );
}