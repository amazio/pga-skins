import React from 'react';
import { Button } from '@material-ui/core';
import { SaveOutlined } from '@material-ui/icons';

export default function ButtonSave({handleClick}) {
  return (
    <Button onClick={handleClick} startIcon={<SaveOutlined />} size='small' style={{color: 'white'}}>SAVE</Button>
  );
}