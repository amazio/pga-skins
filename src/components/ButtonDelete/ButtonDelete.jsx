import React from 'react';
import { Button } from '@material-ui/core';
import { DeleteOutlined } from '@material-ui/icons';

export default function ButtonDelete({handleDelete}) {
  return (
    <Button onClick={handleDelete} startIcon={<DeleteOutlined />} variant='outlined' size='small'>DELETE</Button>
  );
}