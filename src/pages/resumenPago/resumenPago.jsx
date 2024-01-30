/* eslint-disable max-len */
import { Typography } from '@mui/material';
import React, { useState } from 'react';
import { useParams } from 'react-router';
import ResumenPagoForm from './resumenPagoForm';

// eslint-disable-next-line react/prop-types
function ResumenPago() {
  const { status } = useParams();

  const [button, setButton] = useState({ activate: false, ticket: null });

  return (
    <>
      <Typography
        variant="h4"
        sx={{
          color: 'white',
        }}
      >
        { status !== 'cancel' ? (
          'Completado'
        ) : 'Cancelado' }
      </Typography>
      <ResumenPagoForm setButton={setButton} />
      {button.ticket && button.ticket === 1 && (
        <Typography
          variant="h6"
          sx={{
            color: 'white',
          }}
        >
          Pronto estará recibiendo respuesta al correo que usted suministró. ¡Gracias!
        </Typography>
      )}
    </>
  );
}

export default ResumenPago;
