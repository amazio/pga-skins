import React from 'react';
import { Button } from '@material-ui/core';
import { ShareOutlined } from '@material-ui/icons';

export default function ButtonShare({handleShare}) {
  return (
    <Button onClick={handleShare} startIcon={<ShareOutlined />} variant='outlined' size='small'>SHARE</Button>
  );
}