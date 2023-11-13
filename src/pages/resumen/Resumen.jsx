import {
  Container,
  Typography,
} from '@mui/material';
import React from 'react';
import ResumenForm from './resumenForm/resumenForm';

function Resumen() {
  return (
    <Container sx={{
      display: 'flex',
      flexDirection: 'column',
      gap: '30px',
      padding: '3px',
    }}
    >
      <Typography variant="h4" color="secondary" sx={{ borderBottom: '2Spx solid yellow' }}>
        Resumen
      </Typography>
      <ResumenForm />
    </Container>
  );
}

export default Resumen;
