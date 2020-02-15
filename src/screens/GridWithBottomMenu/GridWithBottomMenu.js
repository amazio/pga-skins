import React from 'react';
import './GridWithBottomMenu.css';
import {Route, Switch} from 'react-router-dom';
import HomeScreen from '../HomeScreen/HomeScreen';

function GridWithBottomMenu(props) {
  return (
    <main className='GWBM_grid'>
      <section>
        <Switch>
          <Route path='/'>
            <HomeScreen leaderboard={props.tourney.leaderboard} />
          </Route>
        </Switch>
      </section>
      <nav style={{backgroundColor: 'pink'}}>
        BOTTOM MENU
      </nav>
    </main>
  );
}

export default GridWithBottomMenu;