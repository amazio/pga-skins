import React, { useEffect, useReducer } from 'react';
import { Route, Switch } from 'react-router-dom';
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles'; 
import StoreProvider from './contexts/StoreProvider';
import storeReducer, { initialState, actions } from './reducers/store-reducer';
import tourneyService from './services/tourneyService';

import GridWithBottomMenu from './screens/GridWithBottomMenu/GridWithBottomMenu';

const palette = {
  primary: { main: '#E8F5E9', contrastText: '#424242' },
  secondary: { main: '#B9F6CA', contrastText: '#424242' }
};

const theme = createMuiTheme(palette, 'Minty Green');

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
      <ThemeProvider theme={theme}>
        <Switch>
          {/* Routes without bottom menu go here */}
          <Route path='/'>
            <GridWithBottomMenu />
          </Route>
        </Switch>
      </ThemeProvider>
    </StoreProvider.Provider>
  );
}

export default App;
