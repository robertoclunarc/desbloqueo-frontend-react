import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import ScrollTrigger from 'react-scroll-trigger';
import CountUp from 'react-countup';
import { useNavigate } from 'react-router';

function Counter() {
  const [counterOn, setCounterOn] = useState(false);

  const navigate = useNavigate();

  const statCounterItems = [
    {
      title: 'Celulares liberados',
      start: 0,
      end: 1500,
    },
    {
      title: 'Paises atendidos',
      start: 0,
      end: 100,
    },
    {
      title: 'Operadoras Telefónicas Compatibles',
      start: 0,
      end: 10000,
    },
    {
      title: 'Años de experiencia',
      start: 0,
      end: 10,
    },
  ];

  return (
    <ScrollTrigger
      onEnter={() => setCounterOn(true)}
      onExit={() => setCounterOn(false)}
      style={{
        width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center',
      }}
    >
      <Box sx={{
        width: {
          xl: '78vw', lg: '100%', md: 'auto', sm: '90%', xs: '90%',
        },
        height: {
          xl: '6em', lg: 'auto', md: 'auto', sm: 'auto', xs: 'auto',
        },
        display: 'flex',
        flexDirection: {
          xl: 'row', lg: 'row', md: 'row', sm: 'column', xs: 'column',
        },
        flexWrap: {
          xl: 'none', lg: 'none', md: 'wrap', sm: 'wrap', xs: 'wrap',
        },
        alignItems: 'center',
        justifyContent: 'space-around',
        border: {
          xl: '1px solid white', lg: 'none', md: 'none', sm: 'none', xs: 'none',
        },
        gap: {
          xl: '0px', lg: '0px', md: '30px', sm: '30px', xs: '30px',
        },
        marginTop: {
          xl: '0px', lg: '0px', md: '30px', sm: '30px', xs: '30px',
        },
        borderRadius: '10px',
        padding: {
          xl: '1em 1em 2em 1em', lg: '1em 1em 2em 1em', md: '1em 1em 2em 1em', sm: '.5em', xs: '.5em',
        },
        boxShadow: {
          xl: 'rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px', lg: 'none', md: 'none', sm: 'none', xs: 'none',
        },
      }}
      >
        {statCounterItems.map(({ title, start, end }) => (
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              border: {
                xl: 'none', lg: '1px solid white', md: '1px solid white', sm: '1px solid white', xs: '1px solid white',
              },
              boxShadow: {
                xl: 'none', lg: 'rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px', md: 'rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px', sm: 'rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px', xs: 'rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px',
              },
              borderRadius: '10px',
              width: {
                xl: 'none', lg: '300px', md: '500px', sm: '500px', xs: '90%',
              },
              height: 'auto',
              '&:hover': { cursor: 'pointer' },
            }}
            onClick={() => {
              navigate('/desbloqueos');
            }}
          >
            <Typography variant="h2" sx={{ color: 'white' }}>
              {counterOn && <CountUp start={start} end={end} duration={2} delay={0} />}
              +
            </Typography>
            <Typography variant="h4" sx={{ color: 'white' }}>
              {title}
            </Typography>
          </Box>
        ))}
      </Box>
    </ScrollTrigger>
  );
}

export default Counter;
