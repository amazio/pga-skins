import React from 'react';
import { Button } from '@material-ui/core';
import { SaveOutlined } from '@material-ui/icons';

export default function ButtonSave({handleClick, disabled}) {
  return (
    <Button startIcon={<SaveOutlined />} size='small' style={{color: 'white'}}
      onClick={handleClick} disabled={disabled}
    >
      SAVE
    </Button>
  );
}