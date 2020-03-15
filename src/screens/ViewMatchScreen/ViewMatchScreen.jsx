import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import StoreProvider from '../../contexts/StoreProvider';
import { List, ListItem, Typography } from '@material-ui/core';
import CenteredSpinner from '../../components/CenteredSpinner/CenteredSpinner';
import MatchCard from '../../components/MatchCard/MatchCard';

export default function ViewMatchScreen() {
  const { id } = useParams();
  const {state} = useContext(StoreProvider);
  const {viewingMatch} = state;

  return (
    viewingMatch ?
      <>
        <MatchCard match={viewingMatch} />
        
      </>
      :
      <CenteredSpinner />
  );
}