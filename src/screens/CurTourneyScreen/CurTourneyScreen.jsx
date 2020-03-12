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
        <TourneyCard tourney={curTourney} isCurTourney={true} />
        { 
          matches.length ?
            <List>
              <ListItem>

              </ListItem>
            </List>
          :
            <Typography variant='body1'>You Have No Matches</Typography>
        }
      </>
      :
      <CenteredSpinner />
  );
}