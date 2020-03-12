import React from 'react';
import { Button } from '@material-ui/core';
import { CancelOutlined } from '@material-ui/icons';

export default function ButtonCancel({handleCancel}) {
  return (
    <Button onClick={handleCancel} startIcon={<CancelOutlined />} size='small' style={{color: 'white'}}>CANCEL</Button>
  );
}