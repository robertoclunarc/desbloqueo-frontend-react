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
      justifyContent: 'center',
      alignItems: 'center',
      gap: '10px',
      margin: '.5em',
    }}
    >
      <Typography
        variant="h4"
        sx={{
          color: 'white',
        }}
      >
        Resumen
      </Typography>
      <ResumenForm />
      <Typography
        variant="h6"
        sx={{
          color: 'white',
        }}
      >
        If everything here looks correct, please fill out your IMEI and Email to finish the process.
      </Typography>
    </Container>
  );
}

export default Resumen;
