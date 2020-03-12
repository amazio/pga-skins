import React, { useState, useContext } from 'react';
import StoreProvider from '../../contexts/StoreProvider';
import { Card, CardHeader, CardContent, Typography } from '@material-ui/core';
import CenteredSpinner from '../../components/CenteredSpinner/CenteredSpinner';
import RoundPicker from '../../components/RoundPicker/RoundPicker';

export default function NewMatchScreen() {
  const {state} = useContext(StoreProvider);
  const {curTourney, settings} = state;
  const [formData, setFormData] = useState({round: 1});

  function handleChangeRound(a, b) {
    console.log(a, b);
  }

  return (
    curTourney ?
      <>
        <Card variant='outlined' className='margin-bottom-1rem'>
          <CardHeader title='New Match' subheader={curTourney.title} />
          <CardContent>
            <RoundPicker selectedRound='1' onChange={handleChangeRound}/>
          </CardContent>
        </Card>
      </>
      :
      <CenteredSpinner />
  );
}