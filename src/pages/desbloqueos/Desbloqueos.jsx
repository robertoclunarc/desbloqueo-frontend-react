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
      padding: '30px',
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
      paddingTop: '50px',
      marginTop: '6vh',
    }}
    >
      <Typography color="white" textAlign="center" variant="h4" fontWeight="800">Todo sobre tu desbloqueo</Typography>
      <Typography color="white" textAlign="center" variant="h5" fontWeight="700">en sencillos pasos</Typography>
      <Typography color="white" textAlign="left" variant="h6" fontWeight="600" marginTop="3vh">
        Libera todo el potencial de tu teléfono inteligente en segundos. ¿Estás listo para la libertad total? ¡Hagámoslo juntos!
        <Typography color="white" textAlign="center" variant="h5" fontWeight="800" marginTop="3vh">¿Por qué Elegirnos?</Typography>
        <Typography variant="h6" fontWeight="800" marginTop="3vh">
          Rápido y Seguro: Desbloqueamos tu teléfono de forma rápida y segura, sin riesgos para tu dispositivo.
        </Typography>
        <Typography variant="h6" fontWeight="800" marginTop="3vh">
          Compatibilidad Total: Trabajamos con todas las marcas y modelos principales.
        </Typography>
        <Typography color="white" textAlign="center" variant="h5" fontWeight="800" marginTop="3vh">¡Hazlo Ahora!</Typography>
        <Typography variant="h6" fontWeight="800" marginTop="3vh">
          ¿Listo para liberar tu teléfono? Ingresa los detalles de tu dispositivo a continuación y comencemos.
        </Typography>
      </Typography>
      <Container sx={{ marginTop: '5vh' }}>
        <DesbloqueosForm />
      </Container>
    </Container>
  );
}

export default Desbloqueos;
