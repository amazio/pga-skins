import React, {useState} from 'react';
import './GridWithBottomMenu.css';
import {Route, Switch} from 'react-router-dom';
import {Box} from '@material-ui/core';
import CurTourneyScreen from '../CurTourneyScreen/CurTourneyScreen';
import BottomNav from '../../components/BottomNav';

function GridWithBottomMenu(props) {
  return (
    <Box className='GWBM_grid'>
      <Box className='GWBM_content'>
        <Switch>
          <Route path='/'>
            <CurTourneyScreen />
          </Route>
        </Switch>
      </Box>
      <BottomNav />
    </Box>
  );
}

export default GridWithBottomMenu;