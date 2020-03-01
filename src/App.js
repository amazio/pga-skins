import React, { useEffect, useReducer } from 'react';
import { Route, Switch } from 'react-router-dom';
import StoreProvider from './contexts/StoreProvider';
import storeReducer, { initialState, actions } from './reducers/store-reducer';
import tourneyService from './services/tourneyService';

import GridWithBottomMenu from './screens/GridWithBottomMenu/GridWithBottomMenu';

function App() {
  const [state, dispatch] = useReducer(storeReducer, initialState);

  useEffect(function () {
    tourneyService.subscribeToUpdates(function(updatedTourney) {
      dispatch({type: actions.UPDATE_CUR_TOURNEY, payload: updatedTourney});
    });
    return function () {
      tourneyService.unsubscribeToUpdates();
    };
  }, []);

  return (
    <StoreProvider.Provider value={{state, dispatch}}>
      <Switch>
        {/* Routes without bottom menu go here */}
        <Route path='/'>
          <GridWithBottomMenu />
        </Route>
      </Switch>
    </StoreProvider.Provider>
  );
}

export default App;
