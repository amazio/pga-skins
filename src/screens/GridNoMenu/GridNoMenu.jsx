import React from 'react';
import './GridNoMenu.css';
import { Route, Switch } from 'react-router-dom';
import { Container, Box } from '@material-ui/core';
import TopBar from '../../components/TopBar/TopBar';
import WelcomeScreen from '../WelcomeScreen/WelcomeScreen';

function GridNoMenu() {
  return (
    <Box className='GNM_grid'>
      <TopBar />
      <Container className='flex-col-ctr'>
        <Switch>
          <Route exact path='/welcome'>
            <WelcomeScreen />
          </Route>
        </Switch>
      </Container>
    </Box>
  );
}

export default GridNoMenu;