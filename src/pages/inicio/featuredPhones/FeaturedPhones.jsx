import {
  Box, Typography,
} from '@mui/material';
import React from 'react';

function FeaturedPhones() {
  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'center',
      textAlign: 'center',
      flexDirection: 'column',
    }}
    >
      <Typography color="white"> Con Desbloquea mi cel es facil y seguro, podrás usar tu telefono con cualquier operador.</Typography>
      <Typography color="white"> Samsung, ¡Phone, Google Pixel y más, ¡todos los modelos son compatibles!</Typography>
    </Box>
  );
}

export default FeaturedPhones;
