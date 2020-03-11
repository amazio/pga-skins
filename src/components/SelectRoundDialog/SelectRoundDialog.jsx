import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@material-ui/core';
import { ButtonGroup, Button } from '@material-ui/core';

export default function SelectRoundModal({tourney, open, handleSelectedRound, cancel}) {

  return (
    <Dialog open={open}>
      <DialogTitle>Select Round</DialogTitle>
      <DialogContent>
        <DialogContentText>Round of the new skins match:</DialogContentText>
        <ButtonGroup orientation='vertical'>
          <Button onClick={() => handleSelectedRound(1)}>1</Button>
          <Button onClick={() => handleSelectedRound(2)}>2</Button>
        </ButtonGroup>
      </DialogContent>
      <DialogActions>
        <Button onClick={cancel}>CANCEL</Button>
      </DialogActions>
    </Dialog>
  );
}