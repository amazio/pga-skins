import React, { useState, useContext, useRef } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Button, Snackbar } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import { actions } from '../../reducers/store-reducer';
import ButtonSave from '../ButtonSave/ButtonSave';
import ButtonCancel from '../ButtonCancel/ButtonCancel';
import ButtonShare from '../ButtonShare/ButtonShare';
import ButtonDelete from '../ButtonDelete/ButtonDelete';
import StoreProvider from '../../contexts/StoreProvider';
import realtimeService from '../../services/realtimeService';
import settingsService from '../../services/settingsService';

export default function TopBarControls() {
  const [ showCopyMsg, setShowCopyMsg ] = useState(false);
  const { state, dispatch } = useContext(StoreProvider);
  const { ui } = state;
  const { pathname } = useLocation();
  const history = useHistory();
  const inputEl = useRef(null);

  function handleCreateMatch() {
    realtimeService.createMatch(state.newMatchData, function (err, match) {
      dispatch({ type: actions.CREATE_MATCH, payload: match });
      history.push(`/matches/${match._id}`);
    });
  }

  function handleCancelNewMatch() {
    history.goBack();
  }

  function handleShare() {
    inputEl.current.select();
    document.execCommand('copy');
    setShowCopyMsg(true);
  }

  function handleDelete() {
    console.log('handleDelete')
  }

  if (pathname === '/') {
    return ui.matchesTab === 'current' ?
      <Button onClick={() => history.push('/matches/new')} startIcon={<Add />} variant='outlined' size='small'>MATCH</Button>
      :
      <Button onClick={() => window.localStorage.clear()} variant='outlined' size='small'>TEMP CLEAR LOCALSTORAGE</Button>
      ;
  } else if (pathname === '/matches/new') {
    return <span>
      <ButtonCancel handleCancel={handleCancelNewMatch} />&nbsp;
      <ButtonSave handleClick={handleCreateMatch} disabled={ui.saveBtnDisabled} />
    </span>;
  } else if (pathname.startsWith('/matches/')) {
    if (!state.viewingMatch) return null;
    const deviceId = settingsService.getSettings().deviceId;
    return <span>
      {deviceId === state.viewingMatch.deviceId && <ButtonDelete handleDelete={handleDelete} />}
      &nbsp;<ButtonShare handleShare={handleShare} />
      <input ref={inputEl} defaultValue={window.location.href} style={{position: 'absolute', marginTop: -999}} />
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={showCopyMsg}
        onClose={() => setShowCopyMsg(false)}
        autoHideDuration={3000}
        message='Copied Match Link to the Clipboard'
      />
    </span>;
  } else if (pathname === '/settings') {
    return null;
  } else {
    return null;
  }

}