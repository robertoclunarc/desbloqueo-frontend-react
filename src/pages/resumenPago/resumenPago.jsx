/* eslint-disable max-len */
import {
  Container, Typography, Card, Box, Button,
} from '@mui/material';
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
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
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      gap: '100px',
      textAlign: 'center',
      height: 'auto',
      marginTop: '200px',
    }}
    >
      <Container sx={{
        width: {
          xs: '100%', sm: '100%', md: '80%', lg: '80%', xl: '80%',
        },
        position: 'relative',
        height: 'auto',
      }}
      >
        <Card sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          paddingBottom: '30px',
          borderRadius: '35px',
          backgroundColor: '#224776',
          height: { xs: '500px', sm: 'auto' },
          border: '2px solid white',
          justifyContent: 'end',
          boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
          paddingTop: '8em',
        }}
        >
          <Box sx={{
            border: '2px solid white', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'absolute', background: 'linear-gradient(90deg, hsla(1, 84%, 80%, 1) 0%, hsla(56, 100%, 50%, 1) 100%)', width: { xs: '100px', sm: '150px' }, height: { xs: '100px', sm: '150px' }, top: { xs: '-8%', sm: '-11%' }, borderRadius: '50%',
          }}
          >
            { status === 'success' ? (
              <DoneOutlineIcon name="completed" sx={{ height: { xs: '50px', sm: '100px' }, width: { xs: '50px', sm: '100px' }, color: 'black' }} />
            )
              : (<CancelOutlinedIcon name="canceled" sx={{ height: { xs: '50px', sm: '100px' }, width: { xs: '50px', sm: '100px' }, color: 'black' }} />)}
          </Box>
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
        </Card>
      </Container>
    </Box>
  );
}

export default ResumenPago;
