import React from 'react';
import {
  Box, Typography,
} from '@mui/material';

const header = () => (
  <Box sx={{
    display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'start', width: '60vw', height: '10vh', padding: '60px 0px 0px 0px', borderBottom: '1.5px solid grey', marginBottom: '35px',
  }}
  >

    <Typography variant="h2" sx={{ fontWeight: 'bold', color: 'white' }}>
      {' '}
      WELCOME TO
      {' '}
      <span style={{ color: 'gold' }}>DESBLOQUEA</span>
    </Typography>
  </Box>
);

export default header;
