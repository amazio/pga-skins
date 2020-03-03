import React, { useEffect, useReducer } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import StoreProvider from './contexts/StoreProvider';
import storeReducer, { initialState, actions } from './reducers/store-reducer';
import tourneyService from './services/tourneyService';
import matchService from './services/matchService';

import GridWithBottomMenu from './screens/GridWithBottomMenu/GridWithBottomMenu';
import GridNoMenu from './screens/GridNoMenu/GridNoMenu';

function App() {
  const history = useHistory();
  const [state, dispatch] = useReducer(storeReducer, initialState);

  useEffect(function () {
    if (matchService.init(dispatch)) history.push('/welcome');
    // tourneyService.subscribeToUpdates(function(updatedTourney) {
    //   dispatch({type: actions.UPDATE_CUR_TOURNEY, payload: updatedTourney});
    // });
    // return function () {
    //   tourneyService.unsubscribeToUpdates();
    // };
  }, []);

  return (
    <StoreProvider.Provider value={{state, dispatch}}>
      <Switch>
        <Route path='/welcome'>
          <GridNoMenu />
        </Route>
        {/* Routes without bottom menu go above */}
        <Route path='/'>
          <GridWithBottomMenu />
        </Route>
      </Switch>
    </StoreProvider.Provider>
  );
}

export default App;
