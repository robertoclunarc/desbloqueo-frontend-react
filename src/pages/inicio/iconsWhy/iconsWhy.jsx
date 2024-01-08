import React from 'react';
import {
  Box, Typography, Grid, SvgIcon, Button,
} from '@mui/material';
import { useNavigate } from 'react-router';
import { ReactComponent as Award } from '../../../shared/image/award.svg';
import { ReactComponent as Dollar } from '../../../shared/image/dollar-symbol.svg';
import { ReactComponent as Globe } from '../../../shared/image/globe.svg';
import { ReactComponent as Heart } from '../../../shared/image/heart.svg';
import { ReactComponent as Lightening } from '../../../shared/image/light-bolt.svg';
import { ReactComponent as LightBulb } from '../../../shared/image/light-bulb.svg';
import { ReactComponent as Medal } from '../../../shared/image/medal.svg';
import { ReactComponent as Verified } from '../../../shared/image/verified.svg';

const iconsOptions = [
  {
    logo: Award,
    title: 'Elegido por Expertos',
    desc: 'El favorito de operadores y fabricantes',
  },
  {
    logo: Dollar,
    title: 'Soporte Premium',
    desc: 'Expertos disponibles para tu tranquilidad',
  },
  {
    logo: Globe,
    title: 'Sin Límites',
    desc: 'Usa tu móvil con cualquier operadora, en cualquier lugar',
  },
  {
    logo: Heart,
    title: 'Desbloqueo Intuitivo',
    desc: 'Su camino fácil hacia la liberación del móvil',
  },
  {
    logo: Lightening,
    title: 'Velocidad Confiable',
    desc: 'Libera tu celular rápido y legal, sin complicaciones',
  },
  {
    logo: LightBulb,
    title: 'Sin Pausas',
    desc: 'Usa tu móvil normalmente mientras lo liberamos',
  },
  {
    logo: Medal,
    title: 'Tu Móvil, Tu Control',
    desc: 'Desbloqueo seguro sin desprenderte de él',
  },
  {
    logo: Verified,
    title: 'Su Garantía Intacta',
    desc: 'Desbloqueo que respeta los términos de su móvil',
  },
];

const iconsWhy = () => {
  const navigate = useNavigate();

  return (

    <Box sx={{
      width: '90%', paddingTop: '7em', height: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'start',
    }}
    >
      <Typography
        sx={{
          color: 'white',
          width: '95%',
          fontSize: {
            xl: '64px', lg: '64px', md: '54px', sm: '36px', xs: '30px',
          },
          paddingBottom: '.5em',
          borderBottom: '1px solid #1F9CC8',
          textAlign: 'center',
        }}
      >
        {' '}
        ¿Porque
        {' '}
        <span style={{ color: 'gold' }}>liberar</span>
        {' '}
        tu movil con Desbloquea Mi Cel?
        {' '}
      </Typography>

      <Grid
        container
        spacing={3}
        sx={{
          marginLeft: '0px',
          gap: '1em',
          marginTop: '2em',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {iconsOptions.map(({ logo, title, desc }) => (
          <Grid
            item
            xs={10}
            sm={8}
            md={5}
            lg={3}
            xl={2.5}
            sx={{
              '&:hover': { cursor: 'pointer' },
              padding: '1em',
              display: 'flex',
              alignItems: 'center',
              justifyContents: 'center',
              flexDirection: 'column',
              borderRadius: '15px',
              border: '3px solid white',
              height: {
                xl: '220px', lg: '220px', md: '220px', sm: '220px', xs: 'auto',
              },
            }}
            onClick={() => {
              navigate('/desbloqueos');
            }}
          >
            <Box sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'start',
              textAlign: 'center',
              width: '100%',
              height: 'auto',
              flexDirection: {
                xl: 'row', lg: 'row', md: 'row', sm: 'row', xs: 'column',
              },
            }}
            >
              <SvgIcon
                component={logo}
                inheritViewBox
                sx={{
                  height: '50px',
                  width: '50px',
                  color: 'white',
                  paddingBottom: '.2em',
                }}
              />
              <Typography sx={{
                color: 'white',
                fontSize: {
                  xl: '44px', lg: '30px', md: '40px', sm: '40px', xs: '34px',
                },
                marginLeft: {
                  xl: '.5em', lg: '.5em', md: '.5em', sm: '.5em', xs: '0em',
                },
              }}
              >
                {title}

              </Typography>
            </Box>
            <Typography sx={{
              color: 'white',
              marginTop: {
                xl: '0em', lg: '0em', md: '0em', sm: '0em', xs: '1em',
              },
            }}
            >
              {desc}

            </Typography>
          </Grid>
        ))}

      </Grid>
      <Button
        variant="contained"
        sx={{
          width: {
            xl: 'auto', lg: 'auto', md: 'auto', sm: '50%', xs: '50%',
          },
          marginBottom: '3em',
          backgroundColor: 'white',
          color: '#051650',
          marginTop: '3em',
          '&:hover': { color: 'white' },
        }}
        onClick={() => {
          navigate('/desbloqueos');
        }}
      >
        {' '}
        ¡Libera tu celular ya!
      </Button>
    </Box>
  );
};

export default iconsWhy;
