import React, {useState} from 'react';
import './GridWithBottomMenu.css';
import {Route, Switch} from 'react-router-dom';
import CurTourneyScreen from '../CurTourneyScreen/CurTourneyScreen';
import BottomNav from '../../components/BottomNav';

function GridWithBottomMenu(props) {
  return (
    <main className='GWBM_grid'>
      <section className='GWBM_content'>
        <Switch>
          <Route path='/'>
            <CurTourneyScreen />
          </Route>
        </Switch>
      </section>
      <BottomNav />
    </main>
  );
}

export default GridWithBottomMenu;