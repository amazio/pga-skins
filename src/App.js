import React, {useState, useEffect} from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import tourneyService from './services/tourneyService';

import GridWithBottomMenu from './screens/GridWithBottomMenu/GridWithBottomMenu';

function App() {

  const [tourney, setTourney] = useState({leaderboard: []});

  useEffect(function() {
    tourneyService.subscribeToUpdates(setTourney);
    return function() {
      tourneyService.unsubscribeToUpdates();
    };
  }, []);

  return (
    <Switch>
      {/* Routes without bottom menu go here */}
      <Route path='/'>
        <GridWithBottomMenu tourney={tourney}/>
      </Route>
    </Switch>
  );
}

export default App;
