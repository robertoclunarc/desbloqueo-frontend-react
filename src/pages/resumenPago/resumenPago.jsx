/* eslint-disable max-len */
import {
  Typography, Button,
} from '@mui/material';
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import HomeIcon from '@mui/icons-material/Home';
import { useDispatch } from 'react-redux';
import ResumenPagoForm from './resumenPagoForm';
import { setOpcionesStore } from '../../store/slices/opciones.slice';

function ResumenPago() {
  const { status } = useParams();

  const [button, setButton] = useState(true);

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
      <Typography
        variant="h6"
        sx={{
          color: 'white',
        }}
      >
        Pronto estara recibiendo respuesta al correo que usted suministro. Gracias!
      </Typography>
      <Button color="otherColor" disabled={button} onClick={goHome} sx={{ backgroundColor: '#E1A73E', marginTop: '30px', '&:hover': { backgroundColor: '#E1851f', transition: '0.8s' } }} startIcon={<HomeIcon />} on>Inicio</Button>
    </>
  );
}

export default ResumenPago;
