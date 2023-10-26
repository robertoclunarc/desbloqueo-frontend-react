import React from 'react';
import {
  Box, Typography,
} from '@mui/material';

const header = () => (
  <Box sx={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'start',
    width: {
      xl: '60vw', lg: '70vw', md: '77vw', sm: '80vw', xs: '90vw',
    },
    height: 'auto',
    padding: '60px 0px 0px 0px',
    borderBottom: '1.5px solid grey',
    marginBottom: '35px',
  }}
  >

    <Typography sx={{
      fontWeight: 'bold',
      color: 'white',
      fontSize: {
        xl: '64px', lg: '64px', md: '54px', sm: '36px', xs: '24px',
      },
    }}
    >
      {' '}
      WELCOME TO
      {' '}
      <span style={{ color: 'gold' }}>DESBLOQUEA</span>
    </Typography>
  </Box>
);

export default header;
