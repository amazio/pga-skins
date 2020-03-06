import React from 'react';
import { CircularProgress } from '@material-ui/core';

export default function CenteredSpinner() {
  return (
    <section className='flex-col-ctr height-width-100'>
      <CircularProgress />
    </section>
  );
}
