import React, { useContext } from 'react';
import { Route } from 'react-router-dom';
import StoreProvider from '../../contexts/StoreProvider';
import { List, ListItem, Typography } from '@material-ui/core';
import CenteredSpinner from '../../components/CenteredSpinner/CenteredSpinner';
import TourneyCard from '../../components/TourneyCard/TourneyCard';
import SelectRoundForNewMatch from '../../components/SelectRoundForNewMatch/SelectRoundForNewMatch';

export default function CurTourneyScreen() {
  const {state, realHistory} = useContext(StoreProvider);
  const {curTourney, curSavedMatches: matches} = state;
  return (
    curTourney ?
      <>
        <TourneyCard tourney={curTourney} isCurTourney={true} realHistory={realHistory}/>
        { 
          matches.length ?
            <List>
              <ListItem>

              </ListItem>
            </List>
          :
            <Typography variant='body1'>No Matches</Typography>
        }
        <Route exact path='/pick-round' render={() => 
          <SelectRoundForNewMatch tourney={curTourney} />
        } />
      </>
      :
      <CenteredSpinner />
  );
}