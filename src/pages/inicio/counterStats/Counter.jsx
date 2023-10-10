import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import ScrollTrigger from 'react-scroll-trigger';
import CountUp from 'react-countup';

function Counter() {
  const [counterOn, setCounterOn] = useState(false);

  const statCounterItems = [
    {
      title: 'lorem ipsum',
      start: 0,
      end: 1000,
    },
    {
      title: 'lorem ipsum',
      start: 0,
      end: 100,
    },
    {
      title: 'lorem ipsum',
      start: 0,
      end: 10000,
    },
    {
      title: 'lorem ipsum',
      start: 0,
      end: 10000,
    },
  ];

  return (
    <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)} style={{ width: '60%' }}>
      <Box sx={{
        width: '100%',
        height: '8em',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        border: '1px solid white',
        borderRadius: '10px',
        marginBottom: '2em',
        padding: '1em',
        boxShadow:
            'rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px',
      }}
      >
        {statCounterItems.map(({ title, start, end }) => (
          <Box sx={{
            display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
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
