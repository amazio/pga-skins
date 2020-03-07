import React, { useContext } from 'react';
import StoreProvider from '../../contexts/StoreProvider';
import { actions } from '../../reducers/store-reducer';
import { Tabs, Tab } from '@material-ui/core';
import TabPanel from '../../components/TabPanel/TabPanel';
import CurTourneyScreen from '../CurTourneyScreen/CurTourneyScreen';
import PrevTourneyScreen from '../PrevTourneyScreen/PrevTourneyScreen';

export default function MatchesScreen() {
  const {state, dispatch} = useContext(StoreProvider);
  return (
    <>
      <Tabs variant='fullWidth' value={state.ui.matchesTab} className='margin-bottom-1rem'
        onChange={(e, newValue) => dispatch({type: actions.UPDATE_UI_MATCHES_TAB, payload: newValue})}
      >
        <Tab value='current' label='Current Tourney' />
        <Tab value='previous' label='Previous Tourneys' />
      </Tabs>
      <TabPanel value={state.ui.matchesTab} index='current'>
        <CurTourneyScreen />
      </TabPanel>
      <TabPanel value={state.ui.matchesTab} index='previous'>
        <PrevTourneyScreen />
      </TabPanel>
    </>
  );
}