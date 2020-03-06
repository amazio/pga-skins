import React, {useState, useEffect} from 'react';
import './GridWithBottomMenu.css';
import {Route, Switch} from 'react-router-dom';
import {Box} from '@material-ui/core';
import CurTourneyScreen from '../CurTourneyScreen/CurTourneyScreen';
import TopBar from '../../components/TopBar/TopBar';
import BottomNav from '../../components/BottomNav/BottomNav';

function GridWithBottomMenu(props) {
  const [state, setState] = useState(props.state);
  useEffect(function() {
    if (props.state.then) {
      props.state.then(result => setState(result));
    }
  }, [props]);
  return (
    <Box className='GWBM_grid'>
      <TopBar />
      <Box className='GWBM_content'>
        <Switch>
          <Route path='/'>
            <CurTourneyScreen state={state} dispatch={props.dispatch}/>
          </Route>
        </Switch>
      </Box>
      <BottomNav />
    </Box>
  );
}

export default GridWithBottomMenu;