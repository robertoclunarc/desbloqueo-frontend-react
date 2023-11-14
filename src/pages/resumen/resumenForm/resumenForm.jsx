/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { Box, Typography } from '@mui/material';
import { useSelector } from 'react-redux';

function ResumenForm() {
  const opciones = useSelector((state) => state.opciones);
  return (
    <Box
      sx={{
        padding: '2em', gap: '.5em', background: 'linear-gradient(90deg, hsla(1, 84%, 80%, 1) 0%, hsla(56, 100%, 50%, 1) 100%)', width: { xs: '80%', sm: '55%' }, height: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: { xs: 'white', sm: '#2C5B97' }, flexWrap: 'wrap', border: { xs: '2px solid black', sm: '2px solid black' }, borderRadius: '15px',
      }}
    >
      <Typography
        sx={{ color: 'black' }}
      >
        Pais:
        <span>  </span>
        <span style={{ fontWeight: 'bold' }}>
          {opciones[0].Pais}
        </span>
        ,

      </Typography>
      <Typography
        sx={{ color: 'black' }}
      >
        Operadora:
        <span>  </span>
        <span style={{ fontWeight: 'bold' }}>
          {opciones[1]['Compañia telefonica']}
        </span>
        ,
        {' '}

      </Typography>
      <Typography
        sx={{ color: 'black' }}
      >
        Marca:
        <span>  </span>
        <span style={{ fontWeight: 'bold' }}>
          {opciones[2]?.Marca}
        </span>
      </Typography>
      <Typography
        sx={{ color: 'black' }}
      >
        Modelo:
        <span>  </span>
        <span style={{ fontWeight: 'bold' }}>
          {opciones[3]?.Modelo}
        </span>

      </Typography>
      <Typography
        sx={{ color: 'black' }}
      >
        Tiempo Minimo de Desbloqueo:
        <span>  </span>
        <span style={{ fontWeight: 'bold' }}>
          {opciones[6]?.timeMin}
        </span>
      </Typography>
      <Typography
        sx={{ color: 'black' }}
      >
        Tiempo Maximo de Desbloqueo:
        <span>  </span>
        <span style={{ fontWeight: 'bold' }}>
          {opciones[7]?.timeMax}
        </span>

      </Typography>
      <Typography
        sx={{ color: 'black' }}
      >
        Promedio:
        <span>  </span>
        <span style={{ fontWeight: 'bold' }}>
          {opciones[8]?.avg}
        </span>

      </Typography>
      <Typography
        sx={{ color: 'black' }}
      >
        Monto a Pagar:
        <span>  </span>
        <span style={{ fontWeight: 'bold' }}>
          $
          {opciones[5]?.price}
        </span>
      </Typography>
    </Box>
  );
}

export default ResumenForm;
