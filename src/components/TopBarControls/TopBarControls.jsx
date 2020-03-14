import React, { useContext } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import ButtonSave from '../ButtonSave/ButtonSave';
import ButtonCancel from '../ButtonCancel/ButtonCancel';
import StoreProvider from '../../contexts/StoreProvider';

export default function TopBarControls() {
  const {state, dispatch} = useContext(StoreProvider);
  const {ui} = state;
  const {pathname} = useLocation();
  const history = useHistory();

  function handleSaveMatch() {
    history.push('/');
  }

  function handleCancelNewMatch() {
    history.goBack();
  } 

  switch (pathname) {
    case '/':
      return ui.matchesTab === 'current' ?
        <Button onClick={() => history.push('/matches/new')} startIcon={<Add />} size='small' style={{color: 'white'}}>MATCH</Button>
        :
        null;
    case '/matches/new':
      return <span>
        <ButtonCancel handleCancel={handleCancelNewMatch} />&nbsp;
        <ButtonSave handleClick={handleSaveMatch} disabled={ui.saveBtnDisabled} />
      </span>;
    case '/settings':
    default:
      return null;
  }

}