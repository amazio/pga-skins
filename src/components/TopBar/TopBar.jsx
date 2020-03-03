import React from 'react';
import {AppBar, Toolbar, Typography} from '@material-ui/core';


function TopBar() {
  return (
    <AppBar position='sticky'>
      <Toolbar>
        <Typography variant="h6">
          PGA SKINS
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;