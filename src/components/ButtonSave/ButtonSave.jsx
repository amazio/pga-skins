import React from 'react';
import { Button } from '@material-ui/core';
import { SaveOutlined } from '@material-ui/icons';

export default function ButtonSave({handleClick, disabled}) {
  return (
    <Button startIcon={<SaveOutlined />} variant='outlined' size='small' 
      onClick={handleClick} disabled={disabled}
    >
      SAVE
    </Button>
  );
}