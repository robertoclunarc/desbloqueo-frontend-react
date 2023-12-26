import { Container, Typography } from '@mui/material';
import React from 'react';
import { useParams } from 'react-router';
import ResumenPagoForm from './resumenPagoForm';
import Navbar from '../../components/navbar/Navbar';

function ResumenPago() {
  const { status } = useParams();
  // eslint-disable-next-line no-console
  console.log(status);
  return (
    <>
      <Navbar />
      <Container sx={{
        padding: '5px',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        paddingTop: '50px',
        marginTop: '6vh',
        paddingBottom: '6vh',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0F5986',
      }}
      >
        <Typography
          variant="h4"
          sx={{
            color: 'white',
          }}
        >
          {status}
        </Typography>
        <ResumenPagoForm />
        <Typography
          variant="h6"
          sx={{
            color: 'white',
          }}
        >
          Pronto estara recibiendo respuesta al correo que suministro. Gracias!
        </Typography>
      </Container>
    </>
  );
}

export default ResumenPago;
