/* eslint-disable max-len */
import {
  Typography, Button, IconButton,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import HomeIcon from '@mui/icons-material/Home';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useDispatch } from 'react-redux';
import ResumenPagoForm from './resumenPagoForm';
import { setOpcionesStore } from '../../store/slices/opciones.slice';

// eslint-disable-next-line react/prop-types
function ResumenPago({ setFromActivePanel }) {
  const { status } = useParams();
  const [button, setButton] = useState({ activate: false, ticket: null });

  const handleNextPrevClick = (active) => {
    setFromActivePanel({
      formActivePanelId: active,
      formActivePanelChange: true,
    });
  };

  useEffect(() => {
    setFromActivePanel({
      formActivePanelId: 4,
      formActivePanelChange: true,
    });
  }, []);
  // eslint-disable-next-line no-console
  console.log({ setFromActivePanel });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const goHome = () => {
    navigate('/');
    dispatch(setOpcionesStore([]));
  };
  return (
    <>
      <Typography
        variant="h4"
        sx={{
          color: 'white',
        }}
      >
        {status}
      </Typography>
      <ResumenPagoForm setButton={setButton} />
      {button.ticket && (
        <Typography
          variant="h6"
          sx={{
            color: 'white',
          }}
        >
          Pronto estara recibiendo respuesta al correo que usted suministro. Gracias!
        </Typography>
      )}
      { status && status === 'success' && button.ticket ? (
        <Button color="otherColor" disabled={button.activate} onClick={goHome} sx={{ backgroundColor: '#E1A73E', marginTop: '30px', '&:hover': { backgroundColor: '#E1851f', transition: '0.8s' } }} startIcon={<HomeIcon />} on>Inicio</Button>
      ) : (
        <IconButton onClick={() => handleNextPrevClick(3)} sx={{ marginTop: '20px', border: '1px solid white', background: 'linear-gradient(90deg, hsla(1, 84%, 80%, 1) 0%, hsla(56, 100%, 50%, 1) 100%)' }}>
          <ArrowBackIcon sx={{ color: 'black' }} fontSize="large" />
        </IconButton>
      )}
    </>
  );
}

export default ResumenPago;
