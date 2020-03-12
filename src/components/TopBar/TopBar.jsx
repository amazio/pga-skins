import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import TopBarControls from '../TopBarControls/TopBarControls';

export default function TopBar() {
  return (
    <AppBar position='sticky'>
      <Toolbar className='justify-content-between'>
        <Typography variant="h6">
          PGA SKINS
        </Typography>
        <TopBarControls />
      </Toolbar>
    </AppBar>
  );
}