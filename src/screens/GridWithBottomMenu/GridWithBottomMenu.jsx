import React from 'react';
import './GridWithBottomMenu.css';
import {Route, Switch} from 'react-router-dom';
import {Box} from '@material-ui/core';
import MatchesScreen from '../MatchesScreen/MatchesScreen';
import NewMatchScreen from '../NewMatchScreen/NewMatchScreen';
import TopBar from '../../components/TopBar/TopBar';
import BottomNav from '../../components/BottomNav/BottomNav';

function GridWithBottomMenu() {
  return (
    <Box className='GWBM_grid'>
      <TopBar />
      <Box className='GWBM_content'>
        <Switch>
          <Route path='/matches/new' render={() =>
            <NewMatchScreen />
          } />
          <Route path='/' render={() =>
            <MatchesScreen />
          } />
        </Switch>
      </Box>
      <BottomNav />
    </Box>
  );
}

export default GridWithBottomMenu;