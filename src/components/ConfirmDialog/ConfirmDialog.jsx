import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from '@material-ui/core';

export default function ConfirmDialog({isConfirmOpen, handleClose, title, dialogContent, confirmBtnText}) {
  return (
    <Dialog open={isConfirmOpen} title={title}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{dialogContent}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => handleClose(false)}>Cancel</Button>
        <Button onClick={() => handleClose(true)}>{confirmBtnText || 'Yes'}</Button>
      </DialogActions>
    </Dialog>
  );
}
