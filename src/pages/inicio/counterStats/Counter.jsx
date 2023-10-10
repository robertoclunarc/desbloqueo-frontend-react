import React, { useState } from 'react';
import { Box } from '@mui/material';
import ScrollTrigger from 'react-scroll-trigger';

function Counter() {
  const [counterOn, setCounterOn] = useState(false);

  return (
    <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
      <Box sx={{
        width: '60%',
        height: '8em',
        border: '1px solid white',
        borderRadius: '10px',
        marginBottom: '2em',
        padding: '1em',
        boxShadow:
            'rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px',
      }}
      >
        {counterOn}
        Counter

      </Box>
    </ScrollTrigger>
  );
}

export default Counter;
