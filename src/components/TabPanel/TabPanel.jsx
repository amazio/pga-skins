import React from 'react';
import { Typography } from '@material-ui/core';

export default function TabPanel(props) {
  const {value, index, children} = props;
  return (
    <Typography component='div' role='tabpanel'
      hidden={value !== index}
    >
      {value === index && children}
    </Typography>
  );
}