import React, { useContext } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Button, isWidthDown } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import { actions } from '../../reducers/store-reducer';
import ButtonSave from '../ButtonSave/ButtonSave';
import ButtonCancel from '../ButtonCancel/ButtonCancel';
import StoreProvider from '../../contexts/StoreProvider';
import realtimeService from '../../services/realtimeService';
import matchService from '../../services/matchService';

export default function TopBarControls() {
  const {state, dispatch} = useContext(StoreProvider);
  const {ui} = state;
  const {pathname} = useLocation();
  const history = useHistory();

  function handleCreateMatch() {
    realtimeService.createMatch(state.newMatchData, function(err, match) {
      dispatch({type: actions.CREATE_MATCH, payload: match});
      history.push(`/matches/${match._id}`);
    });
  }

  function handleCancelNewMatch() {
    history.goBack();
  } 

  switch (pathname) {
    case '/':
      return ui.matchesTab === 'current' ?
      <Button onClick={() => history.push('/matches/new')} startIcon={<Add />} variant='outlined' size='small'>MATCH</Button>
      :
      <Button onClick={() => window.localStorage.clear()} variant='outlined' size='small'>TEMP CLEAR LOCALSTORAGE</Button>
      ;
    case '/matches/new':
      return <span>
        <ButtonCancel handleCancel={handleCancelNewMatch} />&nbsp;
        <ButtonSave handleClick={handleCreateMatch} disabled={ui.saveBtnDisabled} />
      </span>;
    case '/settings':
    default:
      return null;
  }

}