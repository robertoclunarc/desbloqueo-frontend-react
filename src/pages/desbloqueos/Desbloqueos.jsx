/* eslint-disable max-len */
import {
  Container,
  Typography,
  Box,
  SvgIcon,
  CardMedia,
} from '@mui/material';
import React from 'react';
import DesbloqueosForm from './form/DesbloqueosForm';
import { ReactComponent as Check } from '../../shared/image/checked.svg';
import mujer from '../../shared/image/1(6).png';
import Navbar from '../../components/navbar/Navbar';

const checkedOptions = [
  {
    icon: Check,
    title: 'Garantía Total o le Devolvemos su Dinero',
  },
  {
    icon: Check,
    title: 'Únase a Nuestra Comunidad de Clientes Satisfechos',
  },
  {
    icon: Check,
    title: 'Libera Tu Mundo Móvil',
  },
];

function Desbloqueos() {
  return (
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
      <Navbar />
      <Box sx={{
        display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row', width: '85%',
      }}
      >
        <Box sx={{
          width: { xl: '60%', lg: '60%', md: '70%' }, display: 'flex', alignItems: 'left', justifyContent: 'center', flexDirection: 'column',
        }}
        >
          <Typography sx={{
            color: 'white',
            fontSize: {
              xl: '48px', lg: '48px', md: '40px', sm: '36px', xs: '24px',
            },
          }}
          >
            ¿Listo para liberar su celular?

          </Typography>
          <Typography sx={{
            color: 'white',
            fontSize: {
              xl: '30px', lg: '30px', md: '24px', sm: '24px', xs: '18px',
            },
            marginBottom: '.6em',
          }}
          >
            Comience aquí:
          </Typography>
          {checkedOptions.map((item) => (
            <Box sx={{
              display: 'flex', justifyContent: 'start', alignItems: 'center', flexDirection: 'row',
            }}
            >
              <SvgIcon
                component={item.icon}
                inheritViewBox
                sx={{
                  height: '20px',
                  width: '20px',
                  color: 'white',
                  paddingBottom: '.5em',
                }}
              />
              <Typography sx={{
                color: 'white',
                fontSize: {
                  xl: '20px', lg: '20px', md: '20px', sm: '20px', xs: '14px',
                },
                marginLeft: {
                  xl: '.5em', lg: '.5em', md: '.5em', sm: '.5em', xs: '.5em',
                },
                marginBottom: '.8em',
              }}
              >
                {item.title}

              </Typography>
            </Box>
          ))}
        </Box>
        <CardMedia
          component="img"
          src={mujer}
          sx={{
            width: {
              xl: '40%', lg: '40%', md: '30%', sm: 'none', xs: 'none',
            },
            height: '80%',
            display: {
              xl: 'flex', lg: 'flex', md: 'flex', sm: 'none', xs: 'none',
            },
          }}
        />
      </Box>
      <Container sx={{ marginTop: { xs: '7vh', sm: '5vh' }, height: 'auto' }}>
        <DesbloqueosForm />
      </Container>
    </Container>
  );
}

export default Desbloqueos;
