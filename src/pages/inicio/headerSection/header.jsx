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
      xl: '70vw', lg: '70vw', md: '77vw', sm: '80vw', xs: '90vw',
    },
    height: 'auto',
    padding: '60px 0px 0px 0px',
    borderBottom: '1.5px solid #1F9CC8',
    marginBottom: {
      xl: '35px', lg: '35px', md: '35px', sm: '15px', xs: '0px',
    },
  }}
  >

    <Typography sx={{
      fontWeight: 'bold',
      color: 'white',
      textAlign: 'center',
      fontSize: {
        xl: '64px', lg: '64px', md: '54px', sm: '36px', xs: '24px',
      },
    }}
    >
      <span style={{ color: 'gold' }}>Liberación</span>
      {' '}
      de celulares al alcance de tu mano
      {' '}
    </Typography>
  </Box>
);

export default header;
