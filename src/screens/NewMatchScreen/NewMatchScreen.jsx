import React, { useState, useEffect, useContext } from 'react';
import StoreProvider from '../../contexts/StoreProvider';
import { Card, CardHeader, CardContent, Divider, TextField, FormControlLabel, Switch } from '@material-ui/core';
import CenteredSpinner from '../../components/CenteredSpinner/CenteredSpinner';
import RoundPicker from '../../components/RoundPicker/RoundPicker';

function getDefaultRound(tourney) {
  console.log(tourney)
  if (!tourney.isStarted) return '1';
  if (tourney.isFinished) return '4';
  console.log(tourney.curRound, tourney.curRound.toString())
  return tourney.curRound.toString();
}

export default function NewMatchScreen() {
  const { state } = useContext(StoreProvider);
  const { curTourney, settings } = state;
  console.log(settings)
  const [matchData, setMatchData] = useState({});

  useEffect(function () {
    setMatchData({
      ...matchData,
      deviceId: settings.deviceId,
      round: curTourney && getDefaultRound(curTourney),
      moneyPerSkin: settings.moneyPerSkin,
      carrySkins: settings.carrySkins
    });
  }, [curTourney, settings]);

  function handleChangeRound(e, round) {
    setMatchData({ ...matchData, round });
  }

  function handleChangeMoney(e) {
    setMatchData({ ...matchData, moneyPerSkin: parseInt(e.target.value) });
  }

  function handleChangeCarry(e) {
    setMatchData({ ...matchData, carrySkins: e.target.checked });
  }

  return (
    curTourney ?
      <>
        <Card variant='outlined' className='margin-bottom-1rem'>
          <CardHeader title='New Match' subheader={curTourney.title} />
          <Divider />
          <CardContent>
            <RoundPicker round={matchData.round} onChange={handleChangeRound} color='primary' />
            <TextField label='Money Per Skin' type='number' variant='outlined' min='1' step='1' margin='normal'
              value={matchData.moneyPerSkin} onChange={handleChangeMoney} color='primary'
            />
            <FormControlLabel margin='normal' label='Carry Over Skins?' color='primary'
              control={<Switch checked={matchData.carrySkins} onChange={handleChangeCarry} />}
            />
          </CardContent>
        </Card>
      </>
      :
      <CenteredSpinner />
  );
}