import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import StoreProvider from '../../contexts/StoreProvider';
import realtimeService from '../../services/realtimeService';
import MatchCard from '../../components/MatchCard/MatchCard';
import { Typography } from '@material-ui/core';

export default function ViewMatchScreen() {
  const { id } = useParams();
  const { state, dispatch } = useContext(StoreProvider);
  const { viewingMatch, curTourney } = state;

  useEffect(function () {
    // Sends a 'VIEW_MATCH' message to server.
    // viewingMatch state will be updated each time server sends UPDATE_VIEWING_MATCH message
    realtimeService.viewMatch(id, dispatch);
    // Return a cleanup function to let the server know we're no longer viewing the match
    return function () {
      realtimeService.stopViewingMatch(id);
    }
  }, [id, dispatch]);

  return (
    viewingMatch && curTourney ?
      <MatchCard match={viewingMatch} tourneyRound={curTourney.curRound} />
      :
      <Typography variant='body1' style={{ marginTop: '2rem' }}>Sorry<br/>Match No Longer Exists</Typography>
  );
}