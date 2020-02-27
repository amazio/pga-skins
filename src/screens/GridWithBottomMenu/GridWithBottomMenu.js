import React from 'react';
import './GridWithBottomMenu.css';
import {Route, Switch} from 'react-router-dom';
import CurTourneyScreen from '../CurTourneyScreen/CurTourneyScreen';

import {Container} from 'rsuite';

function GridWithBottomMenu(props) {
  return (
    <main className='GWBM_grid'>
      <Container className='GWBM_content'>
        <Switch>
          <Route path='/'>
            <CurTourneyScreen />
          </Route>
        </Switch>
      </Container>
      <nav className='GWBM_nav'>
        BOTTOM MENU
      </nav>
    </main>
  );
}

export default GridWithBottomMenu;