import React from 'react';
import './GridNoMenu.css';
import { Route, Switch } from 'react-router-dom';
import { Container, Box, Typography } from '@material-ui/core';
import TopBar from '../../components/TopBar/TopBar';

function GridNoMenu(props) {
  return (
    <Box className='GNM_grid'>
      <TopBar />
      <Container>
        <Typography variant="h6">
          re inventore cupiditate dicta quaerat sunt aliquam ipsum totam accusantium deserunt, in neque modi ab ea aliquid a distinctio voluptates laboriosam, sequi exercitationem, iusto impedit. Maiores aperiam dolorum iusto!
          re inventore cupiditate dicta quaerat sunt aliquam ipsum totam accusantium deserunt, in neque modi ab ea aliquid a distinctio voluptates laboriosam, sequi exercitationem, iusto impedit. Maiores aperiam dolorum iusto!
          re inventore cupiditate dicta quaerat sunt aliquam ipsum totam accusantium deserunt, in neque modi ab ea aliquid a distinctio voluptates laboriosam, sequi exercitationem, iusto impedit. Maiores aperiam dolorum iusto!
          re inventore cupiditate dicta quaerat sunt aliquam ipsum totam accusantium deserunt, in neque modi ab ea aliquid a distinctio voluptates laboriosam, sequi exercitationem, iusto impedit. Maiores aperiam dolorum iusto!
        </Typography>
      </Container>
    </Box>
  );
}

export default GridNoMenu;