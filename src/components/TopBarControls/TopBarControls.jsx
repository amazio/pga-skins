import React, { useContext } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import ButtonSave from '../ButtonSave/ButtonSave';
import StoreProvider from '../../contexts/StoreProvider';

export default function TopBarControls() {
  const {state, dispatch} = useContext(StoreProvider);
  const {ui} = state;
  const {pathname} = useLocation();
  const history = useHistory();

  function saveMatch() {
    console.log('save match clicked');
    history.push('/');
  }

  switch (pathname) {
    case '/':
      return ui.matchesTab === 'current' ?
        <Button onClick={() => history.push('/matches/new')} startIcon={<Add />} size='small' style={{color: 'white'}}>MATCH</Button>
        :
        null;
    case '/matches/new':
      return <ButtonSave handleClick={saveMatch} />
    case '/settings':
    default:
      return null;
  }

}