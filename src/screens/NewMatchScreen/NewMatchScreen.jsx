import React, { useContext } from 'react';
import StoreProvider from '../../contexts/StoreProvider';
import { List, ListItem, Typography } from '@material-ui/core';
import CenteredSpinner from '../../components/CenteredSpinner/CenteredSpinner';

export default function NewMatchScreen() {
  const {state} = useContext(StoreProvider);
  const {curTourney} = state;

  return (
    curTourney ?
      <>
        <Typography variant='h1'>New Match</Typography>
      </>
      :
      <CenteredSpinner />
  );
}