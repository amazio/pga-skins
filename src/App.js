import React, { useEffect, useReducer } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import StoreProvider from './contexts/StoreProvider';
import storeReducer, { initialState } from './reducers/store-reducer';
import settingsService from './services/settingsService';
import tourneyService from './services/tourneyService';
import GridWithBottomMenu from './screens/GridWithBottomMenu/GridWithBottomMenu';
import GridNoMenu from './screens/GridNoMenu/GridNoMenu';

export default function App() {
  const history = useHistory();
  const [state, dispatch] = useReducer(storeReducer, initialState);
  
  useEffect(function () {
    // Fetch the cur tourney every hour
    tourneyService.setCurTourney(dispatch, 1000 * 60 * 60);
    // init will return true if this is the first visit for the device
    if (settingsService.init(dispatch)) history.push('/welcome');
  }, []);

  console.log('TODO: remove window.dispatch')
  window.dispatch = dispatch;

  return (
    <StoreProvider.Provider value={{state, dispatch}}>
      <Switch>
        <Route path='/welcome' render={() =>
          <GridNoMenu />
        } />
        {/* Routes without bottom menu go above */}
        <Route path='/' render={() =>
          <GridWithBottomMenu />
        } />
      </Switch>
    </StoreProvider.Provider>
  );
}
