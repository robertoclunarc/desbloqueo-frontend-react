/* eslint-disable react/prop-types */
/* eslint-disable react/forbid-prop-types */
import React, { useEffect, useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate, useParams } from 'react-router';
import { useDispatch } from 'react-redux';
import HomeIcon from '@mui/icons-material/Home';
import { setOpcionesStore } from '../../store/slices/opciones.slice';

function ResumenPagoForm({ setButton }) {
  const { status } = useParams();
  const datosResumen = localStorage.getItem('datosResumen');
  const opciones = JSON.parse(datosResumen);
  const dispatch = useDispatch();
  const [resTicket, setResTicket] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (status === 'success') {
        setButton({ activate: false, ticket: 1 });
        setResTicket({ message: 'La orden se procesó con éxito.' });
      } else {
        setResTicket({ message: 'Lo sentimos, Tu Pago Fue Rechazado' });
        setButton({ activate: false, ticket: null });
      }
    };
    fetchData();
  }, []);

  const navigate = useNavigate();

  const goHome = () => {
    navigate('/');
    dispatch(setOpcionesStore([]));
  };

  return (
    <>
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
            {opciones[1]['Compañia telefonica']}
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
          sx={{ color: 'black' }}
        >
          IMEI:
          <span>  </span>
          <span style={{ fontWeight: 'bold' }}>
            {opciones[10]?.imei}
            ,
          </span>

        </Typography>
        <Typography
          sx={{ color: 'black' }}
        >
          E-Mail:
          <span>  </span>
          <span style={{ fontWeight: 'bold' }}>
            {opciones[11]?.email}
            ,
          </span>

        </Typography>
        <Typography
          sx={{ color: 'black' }}
        >
          Monto Pagado:
          <span>  </span>
          <span style={{ fontWeight: 'bold' }}>
            $
            {opciones[5]?.price}
          </span>
        </Typography>
      </Box>
      <Typography
        variant="h6"
        sx={{
          color: '#f0a919',
        }}
      >
        {resTicket ? (
          <Box sx={{
            display: 'flex',
            gap: '1px',
            justifyContent: 'center',
            alignItems: 'center',
            width: { xs: '100%', sm: '100%' },
            flexDirection: 'column',
          }}
          >
            <span style={{ fontWeight: 'bold' }}>
              {resTicket.message}
            </span>
            <Button color="otherColor" onClick={goHome} sx={{ backgroundColor: '#E1A73E', marginTop: '30px', '&:hover': { backgroundColor: '#E1851f', transition: '0.8s' } }} startIcon={<HomeIcon />} on>Inicio</Button>
          </Box>
        )
          : (
            <span style={{ fontWeight: 'bold' }}>
              Procesando Orden, Por Favor Espere...
            </span>
          )}
      </Typography>
    </>
  );
}

export default ResumenPagoForm;
