/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { Box, Typography } from '@mui/material';
import { useSelector/* useDispatch */ } from 'react-redux';
// import { setOpcionesStore } from '../../../store/slices/opciones.slice';

function ResumenForm() {
  const opciones = useSelector((state) => state.opciones);
  localStorage.removeItem('datosResumen');
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
          {opciones[0]?.Pais}
          ,
        </span>

      </Typography>
      <Typography
        sx={{ color: 'black' }}
      >
        Operadora:
        <span>  </span>
        <span style={{ fontWeight: 'bold' }}>
          {opciones[1] && opciones[1]['Compañia telefonica'] ? opciones[1]['Compañia telefonica'] : ''}
          ,
        </span>
      </Typography>
      <Typography
        sx={{ color: 'black' }}
      >
        Marca:
        <span>  </span>
        <span style={{ fontWeight: 'bold' }}>
          {opciones[2]?.Marca}
          ,
        </span>
      </Typography>
      <Typography
        sx={{ color: 'black' }}
      >
        Modelo:
        <span>  </span>
        <span style={{ fontWeight: 'bold' }}>
          {opciones[3]?.Modelo}
          ,
        </span>

      </Typography>
      <Typography
        sx={{ color: 'black' }}
      >
        Tiempo:
        <span>  </span>
        <span style={{ fontWeight: 'bold' }}>
          {` ${opciones[6]?.timeMin} ${opciones[9]?.type} - ${opciones[7]?.timeMax} ${opciones[9]?.type}`}
          {/* {opciones[6]?.timeMin}
          hr(s)
          {' '}
          -
          {' '}
          {opciones[7]?.timeMax}
          hr(s)
          , */}
        </span>
      </Typography>
      <Typography
        sx={{ color: 'black' }}
      >
        Promedio:
        <span>  </span>
        <span style={{ fontWeight: 'bold' }}>
          {opciones[8]?.avg}
          ,
        </span>

      </Typography>
      <Typography
        sx={{ color: 'black', fontSize: '20px' }}
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
