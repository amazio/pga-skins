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
  const { curTourney, settings } = state;
  const [matchData, setMatchData] = useState({selectedPlayerIds: []});

  const matchDataInvalid = getMatchDataInvalid();

  useEffect(function () {
    console.log('running NewMatchScreen useEffect')
    setMatchData({
      ...matchData,
      deviceId: settings.deviceId,
      username: settings.username,
      round: curTourney && getDefaultRound(curTourney),
      moneyPerSkin: settings.moneyPerSkin,
      carrySkins: settings.carrySkins
    });
  }, [curTourney, settings]);

  useEffect(function() {
    dispatch({type: actions.UPDATE_UI_SAVE_BTN, payload: matchDataInvalid});
  }, [matchDataInvalid]);

  function getMatchDataInvalid() {
    let {moneyPerSkin, selectedPlayerIds} = matchData;
    moneyPerSkin = parseInt(moneyPerSkin);
    return (selectedPlayerIds.length < 2) || isNaN(moneyPerSkin) || (moneyPerSkin < 0);
  }

  function handleChangeRound(e, round) {
    setMatchData({ ...matchData, round });
  }

  function handleChangeMoney(e) {
    setMatchData({ ...matchData, moneyPerSkin: e.target.value ? parseInt(e.target.value) : ''});
  }

  function handleChangeCarry(e) {
    setMatchData({ ...matchData, carrySkins: e.target.checked });
  }

  function handleChangePlayers(e, selectedPlayers) {
    setMatchData({...matchData, selectedPlayerIds: selectedPlayers.map(p => p.playerId)});
  }

  // dispatch({type: actions.UPDATE_UI_SAVE_BTN, payload: true});

  return (
    curTourney ?
      <>
        <CardHeader title='New Match' subheader={curTourney.title} />
        <CardContent className='flex-col-ctr'>
          <RoundPicker round={matchData.round} onChange={handleChangeRound} color='primary' />
          <TextField label='Money Per Skin' type='number' variant='outlined' min='1' step='1' margin='normal'
            value={matchData.moneyPerSkin} onChange={handleChangeMoney} color='primary'
          />
          <FormControlLabel margin='normal' label='Carry Over Skins?' className='MuiFormLabel-root'
            control={<Switch checked={matchData.carrySkins} onChange={handleChangeCarry} value='' color='primary' />}
          />
          <SelectPlayers leaderboard={curTourney.leaderboard} onChange={handleChangePlayers} />
        </CardContent>
      </>
      :
      <CenteredSpinner />
  );
}