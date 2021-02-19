import React, { useEffect, useReducer } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import StoreProvider from './contexts/StoreProvider';
import storeReducer, { initialState, actions } from './reducers/store-reducer';
import realtimeService from './services/realtimeService';
import tourneyService from './services/tourneyService';
import settingsService from './services/settingsService';
import GridWithBottomMenu from './screens/GridWithBottomMenu/GridWithBottomMenu';
import GridNoMenu from './screens/GridNoMenu/GridNoMenu';

export default function App() {
  const history = useHistory();
  const [state, dispatch] = useReducer(storeReducer, initialState);

  function renewViewMatch() {
    realtimeService.sendDebugMsg(`App: renewViewMatch\nvisibilityState: ${document.visibilityState}\nstate.viewingMatch: ${!!state.viewingMatch}`);
    if (document.visibilityState === 'visible' && state.viewingMatch) {
      dispatch({action: actions.RECONNECT});
    }
  }

  useEffect(function () {
    // Fetch the current tourney from the server every hour
    tourneyService.setCurTourney(dispatch);
    // Enable realtimeService to call dispatch
    realtimeService.setDispatch(dispatch);
    realtimeService.syncMatchesWithServer();
    // If mobile "tab" is reactivated
    document.addEventListener('visibilitychange', renewViewMatch);
    window.addEventListener('pageshow', renewViewMatch);
    // init will return true if this is the first visit for the device
    if (settingsService.initialize(dispatch)) history.replace('/welcome');
    // Cleanup
    return function () {
      document.removeEventListener('visibilitychange', renewViewMatch);
      window.removeEventListener('pageshow', renewViewMatch);
    }
  }, []);

  return (
    <StoreProvider.Provider value={{ state, dispatch }}>
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
