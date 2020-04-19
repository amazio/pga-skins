import React, { useState, useEffect, useContext } from 'react';
import StoreProvider from '../../contexts/StoreProvider';
import { actions } from '../../reducers/store-reducer';
import { Button, Typography, CardHeader, CardContent, TextField, FormControlLabel, Switch } from '@material-ui/core';
import { DeleteOutlined } from '@material-ui/icons';
import ConfirmDialog from '../../components/ConfirmDialog/ConfirmDialog';

export default function SettingsScreen() {
  const { state, dispatch } = useContext(StoreProvider);
  const { settings: { username, moneyPerSkin, carrySkins }, savedMatches, curTourney } = state;
  const [formData, setFormData] = useState({ username, moneyPerSkin, carrySkins });
  const [isConfirmDeleteMatchesOpen, setIsConfirmDeleteMatchesOpen] = useState(false);

  const disableSaveBtn = formInvalid();
  const previousMatches = curTourney ?
    savedMatches.filter(m => m.tourneyId !== curTourney._id) : [];
  const prevCount = previousMatches.length;

  function formInvalid() {
    if (JSON.stringify({ username, moneyPerSkin, carrySkins }) === JSON.stringify(formData)) return true;
    return formData.moneyPerSkin === '' || formData.moneyPerSkin <= 0 || formData.username.length < 3;
  }

  useEffect(function () {
    dispatch({ type: actions.UPDATE_FORM_DATA, payload: formData });
  }, [formData, dispatch]);


  useEffect(function () {
    dispatch({ type: actions.UPDATE_UI_SAVE_BTN, payload: disableSaveBtn });
  }, [disableSaveBtn, dispatch]);

  function handleChangeMoney(e) {
    setFormData({ ...formData, moneyPerSkin: parseInt(e.target.value) || '' });
  }

  function handleChangeCarry(e) {
    setFormData({ ...formData, carrySkins: e.target.checked });
  }

  function handleChangeUsername(e) {
    setFormData({ ...formData, username: e.target.value });
  }

  function handleDelete(confirmed) {
    alert(confirmed);
    setIsConfirmDeleteMatchesOpen(false);
  }

  return (
    <main className='max-screen-width margin-left-right-auto'>
      <CardHeader title='Settings' />
      <CardContent className='flex-col-ctr'>
        <Typography variant='caption' className='flex-item-left'>New Match Defaults</Typography>
        <TextField label='Money Per Skin' type='number' variant='outlined' min='1' step='1' margin='normal'
          value={formData.moneyPerSkin} onChange={handleChangeMoney} color='primary'
          id='money-per-skin-input'
        />
        <FormControlLabel margin='normal' label='Carry Over Skins?' className='MuiFormLabel-root'
          control={<Switch value='formData.carrySkins' checked={formData.carrySkins} onChange={handleChangeCarry} color='primary' />}
        />
        <Typography variant='caption' className='flex-item-left margin-top-2rem'>Other Settings</Typography>
        <TextField label='Username' variant='outlined' margin='normal'
          value={formData.username} onChange={handleChangeUsername} color='primary'
        />
        <Typography variant='caption' className='flex-item-left margin-top-2rem'>Remove Previous Matches</Typography>

        {
          prevCount ?
            <Button onClick={() => setIsConfirmDeleteMatchesOpen(true)} startIcon={<DeleteOutlined />} variant='outlined' size='small' className='margin-top-1rem'>Remove {prevCount} Match{prevCount > 1 && 'es'}</Button>
            :
            <Typography variant='body2' className='margin-top-1rem'>No Previous Matches to Remove</Typography>
        }

        <ConfirmDialog
          isConfirmOpen={isConfirmDeleteMatchesOpen}
          handleClose={(confirmed) => handleDelete(confirmed)}
          title='Confirm Remove Matches'
          dialogContent='Permanently remove matches for previous tourneys?'
          confirmBtnText='Remove Matches'
        />
      </CardContent>
    </main>
  );
}