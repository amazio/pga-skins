import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import StoreProvider from '../../contexts/StoreProvider';
import realtimeService from '../../services/realtimeService';
import { List, ListItem, Typography } from '@material-ui/core';
import CenteredSpinner from '../../components/CenteredSpinner/CenteredSpinner';
import MatchCard from '../../components/MatchCard/MatchCard';

export default function ViewMatchScreen() {
  const { id } = useParams();
  const { state, dispatch } = useContext(StoreProvider);
  const { viewingMatch } = state;

  useEffect(function() {
    // Sends a 'VIEW_MATCH' message to server.
    // viewingMatch state will be updated each time server sends UPDATE_VIEWING_MATCH message
    realtimeService.viewMatch(id, dispatch);
  }, []);

  return (
    viewingMatch ?
      <>
        <MatchCard match={viewingMatch} />
        
      </>
      :
      <CenteredSpinner />
  );
}