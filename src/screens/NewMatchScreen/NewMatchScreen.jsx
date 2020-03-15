import React, { useState, useEffect, useContext } from 'react';
import StoreProvider from '../../contexts/StoreProvider';
import { actions } from '../../reducers/store-reducer';
import { CardHeader, CardContent, TextField, FormControlLabel, Switch } from '@material-ui/core';
import CenteredSpinner from '../../components/CenteredSpinner/CenteredSpinner';
import RoundPicker from '../../components/RoundPicker/RoundPicker';
import SelectPlayers from '../../components/SelectPlayers/SelectPlayers';

function getDefaultRound(tourney) {
  if (!tourney.isStarted) return '1';
  if (tourney.isFinished) return '4';
  return tourney.curRound.toString();
}

export default function NewMatchScreen() {
  const { state, dispatch } = useContext(StoreProvider);
  const { curTourney, settings, newMatchData: matchData } = state;

  const matchDataInvalid = getMatchDataInvalid();
  
  // Initialize newMatchData in store
  useEffect(function() {
    if (!curTourney) return;
    const {deviceId, username, carrySkins, moneyPerSkin} = settings;
    const {_id: tourneyId, title: tourneyTitle} = curTourney;
    dispatch({
      type: actions.UPDATE_NEW_MATCH_DATA,
      payload: {
        deviceId, username, carrySkins, moneyPerSkin,
        tourneyId, tourneyTitle,
        roundNum: getDefaultRound(curTourney)
      }
    });
  }, [curTourney]);

  useEffect(function() {
    dispatch({type: actions.UPDATE_UI_SAVE_BTN, payload: matchDataInvalid});
  }, [matchDataInvalid]);

  function getMatchDataInvalid() {
    let {moneyPerSkin, selectedPlayerIds} = matchData;
    if (!selectedPlayerIds) return true;
    moneyPerSkin = parseInt(moneyPerSkin);
    return (selectedPlayerIds.length < 2) || isNaN(moneyPerSkin) || (moneyPerSkin < 0);
  }

  function handleChangeRound(e, roundNum) {
    dispatch({type: actions.UPDATE_NEW_MATCH_DATA, payload: {roundNum}});
  }
  
  function handleChangeMoney(e) {
    dispatch({type: actions.UPDATE_NEW_MATCH_DATA, payload: {moneyPerSkin: e.target.value ? parseInt(e.target.value) : ''}});
  }
  
  function handleChangeCarry(e) {
    if (e.target) dispatch({type: actions.UPDATE_NEW_MATCH_DATA, payload: {carrySkins: e.target.checked}});
  }
  
  function handleChangePlayers(e, selectedPlayers) {
    dispatch({type: actions.UPDATE_NEW_MATCH_DATA, payload: {selectedPlayerIds: selectedPlayers.map(p => p.playerId)}});
  }

  return (
    curTourney && matchData.carrySkins !== undefined ?
      <>
        <CardHeader title='New Match' subheader={curTourney.title} />
        <CardContent className='flex-col-ctr'>
          <RoundPicker round={matchData.roundNum} onChange={handleChangeRound} color='primary' />
          <TextField label='Money Per Skin' type='number' variant='outlined' min='1' step='1' margin='normal'
            value={matchData.moneyPerSkin} onChange={handleChangeMoney} color='primary'
          />
          <FormControlLabel margin='normal' label='Carry Over Skins?' className='MuiFormLabel-root'
            control={<Switch value='carrySkins' checked={matchData.carrySkins} onChange={handleChangeCarry} color='primary' />}
          />
          <SelectPlayers leaderboard={curTourney.leaderboard} onChange={handleChangePlayers} />
        </CardContent>
      </>
      :
      <CenteredSpinner />
  );
}