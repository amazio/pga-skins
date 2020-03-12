import React from 'react';
import { Button } from '@material-ui/core';
import { Save } from '@material-ui/icons';

export default function ButtonSave({handleClick}) {
  return (
    <Button onClick={handleClick} startIcon={<Save />} size='small' style={{color: 'white'}}>SAVE</Button>
  );
}