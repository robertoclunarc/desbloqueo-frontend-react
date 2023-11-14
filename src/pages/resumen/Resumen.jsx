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
          fontWeight: 'bold', color: 'transparent', backgroundClip: 'text', backgroundImage: 'linear-gradient(90deg, hsla(1, 84%, 80%, 1) 0%, hsla(56, 100%, 50%, 1) 100%)',
        }}
      >
        Resumen
      </Typography>
      <ResumenForm />
    </Container>
  );
}

export default Resumen;
