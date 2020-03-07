import React, { useContext } from 'react';
import StoreProvider from '../../contexts/StoreProvider';
import { List, ListItem, Typography } from '@material-ui/core';
import CenteredSpinner from '../../components/CenteredSpinner/CenteredSpinner';
import TourneyCard from '../../components/TourneyCard/TourneyCard';

export default function CurTourneyScreen() {
  const {state} = useContext(StoreProvider);
  const {curTourney, curSavedMatches: matches} = state;
  return (
    curTourney ?
      <>
        <TourneyCard tourney={state.curTourney} />
        { 
          matches.length ?
            <List>
              <ListItem>

              </ListItem>
            </List>
          :
            <Typography variant='p'>No Matches</Typography>
        }
      </>
      :
      <CenteredSpinner />
  );
}