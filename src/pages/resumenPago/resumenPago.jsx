import {
  Container,
  Typography,
} from '@mui/material';
import React from 'react';
import ResumenPagoForm from './resumenPagoForm';

function ResumenPago() {
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
      <ResumenPagoForm />
      <Typography
        variant="h6"
        sx={{
          color: 'white',
        }}
      >
        djfsdjkfsbfsdbfjshfjksdfjkbsdkfjbhsdjkfsdkbsdkjfsdjkffsdhf.
      </Typography>
    </Container>
  );
}

export default ResumenPago;
