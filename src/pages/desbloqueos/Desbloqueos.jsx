/* eslint-disable max-len */
import {
  Container,
  Typography,
} from '@mui/material';
import React from 'react';
import DesbloqueosForm from './form/DesbloqueosForm';

function Desbloqueos() {
  return (
    <Container sx={{
      padding: '5px',
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
      paddingTop: '50px',
      marginTop: '6vh',
      paddingBottom: '6vh',
    }}
    >
      <Typography color="white" textAlign="center" variant="h4" fontWeight="800">Todo sobre tu desbloqueo</Typography>
      <Typography color="white" textAlign="center" variant="h5" fontWeight="700">en sencillos pasos</Typography>
      <Container sx={{ marginTop: '5vh' }}>
        <DesbloqueosForm />
      </Container>
    </Container>
  );
}

export default Desbloqueos;
