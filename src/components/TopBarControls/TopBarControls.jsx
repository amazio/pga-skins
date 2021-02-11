import React, { useState, useContext } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Button, Snackbar } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import { actions } from '../../reducers/store-reducer';
import ConfirmDialog from '../ConfirmDialog/ConfirmDialog';
import ButtonSave from '../ButtonSave/ButtonSave';
import ButtonCancel from '../ButtonCancel/ButtonCancel';
import ButtonShare from '../ButtonShare/ButtonShare';
import ButtonDelete from '../ButtonDelete/ButtonDelete';
import StoreProvider from '../../contexts/StoreProvider';
import realtimeService from '../../services/realtimeService';
import settingsService from '../../services/settingsService';

export default function TopBarControls() {
  const [showCopyMsg, setShowCopyMsg] = useState(false);
  const [showCopyFailMsg, setShowCopyFailMsg] = useState(false);
  const [isConfirmDeleteOpen, setIsConfirmDeleteOpen] = useState(false);
  const { state, dispatch } = useContext(StoreProvider);
  const { ui } = state;
  const { pathname } = useLocation();
  const history = useHistory();

  function handleCreateMatch() {
    realtimeService.createMatch(state.formData, function (err, match) {
      dispatch({ type: actions.CREATE_MATCH, payload: match });
      history.push(`/matches/${match._id}`);
    });
  }

  function handleCancel() {
    dispatch({type: actions.UPDATE_FORM_DATA, payload: {}});
    history.goBack();
  }
  
  function handleShare(e) {
    navigator.clipboard.writeText(window.location.href).then(function() {
      setShowCopyMsg(true);
    }, function() {
      setShowCopyFailMsg(true);
    });
  }
  
  function handleDelete(confirmed, matchId, isMatchOwner) {
    setIsConfirmDeleteOpen(false);
    if (confirmed) {
      realtimeService.deleteMatch(matchId, isMatchOwner);
      history.replace('/');
    }
  }
  
  function handleUpdateSettings() {
    dispatch({type: actions.UPDATE_SETTINGS, payload: state.formData});
    // Decided not to route anywhere after clicking Save btn
  }

  if (pathname === '/') {
    return ui.matchesTab === 'current' ?
      <Button onClick={() => history.push('/matches/new')} startIcon={<Add />} variant='outlined' size='small'>MATCH</Button>
      :
      null
      {/* <Button onClick={() => window.localStorage.clear()} variant='outlined' size='small'>TEMP CLEAR LOCALSTORAGE</Button>*/}
      ;
  } else if (pathname === '/matches/new') {
    return <span>
      <ButtonCancel handleCancel={handleCancel} />&nbsp;
      <ButtonSave handleClick={handleCreateMatch} disabled={ui.saveBtnDisabled} />
    </span>;
  } else if (pathname.startsWith('/matches/')) {
    if (!state.viewingMatch) return null;
    const deviceId = settingsService.getSettings().deviceId;
    const isMatchOwner = deviceId === state.viewingMatch.deviceId;
    return <span>
      <ButtonDelete handleDelete={() => setIsConfirmDeleteOpen(true)} />
      &nbsp;<ButtonShare handleShare={handleShare} />
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
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={showCopyFailMsg}
        onClose={() => setShowCopyFailMsg(false)}
        autoHideDuration={5000}
        message="Please Manually Copy Your Browser's Address Bar Contents"
      />
      <ConfirmDialog
        isConfirmOpen={isConfirmDeleteOpen}
        handleClose={(confirmed) => handleDelete(confirmed, state.viewingMatch._id, isMatchOwner)}
        title='Confirm Delete'
        dialogContent={isMatchOwner ?
          'Permanently delete this match that you created?'
          :
          'Remove the match from your list?'
        }
        confirmBtnText='Delete Match'
      />
    </span>;
  } else if (pathname === '/settings') {
    return <span>
      <ButtonCancel handleCancel={handleCancel} />&nbsp;
      <ButtonSave handleClick={handleUpdateSettings} disabled={ui.saveBtnDisabled} />
    </span>;
  } else {
    return null;
  }

}