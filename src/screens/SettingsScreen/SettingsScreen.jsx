import React, { useContext } from 'react';
import StoreProvider from '../../contexts/StoreProvider';
import { List, ListItem, Typography } from '@material-ui/core';

export default function SettingsScreen() {
  const {state} = useContext(StoreProvider);
  const {settings: {deviceId, username, moneyPerSkin, carrySkins}} = state;

  return (
    <Typography variant='h2'>Settings Screen</Typography>
  );
}