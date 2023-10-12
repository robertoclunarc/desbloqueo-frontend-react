import React from 'react';
import {
  Box, Typography, SvgIcon, Button,
} from '@mui/material';
import { ReactComponent as One } from '../../../shared/image/one.svg';
import { ReactComponent as Two } from '../../../shared/image/two.svg';
import { ReactComponent as Three } from '../../../shared/image/three.svg';

const steps = [
  {
    title: 'Fill Out Form',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis ultrices orci, ut vulputate augue. Phasellus tincidunt enim at augue tempor finibus. Nulla at luctus libero, in pharetra.',
    icon: One,
  },
  {
    title: 'Car Gets Shipped',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis ultrices orci, ut vulputate augue. Phasellus tincidunt enim at augue tempor finibus. Nulla at luctus libero, in pharetra.',
    icon: Two,
  },
  {
    title: 'Car Gets Delivered',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis ultrices orci, ut vulputate augue. Phasellus tincidunt enim at augue tempor finibus. Nulla at luctus libero, in pharetra.',
    icon: Three,
  },
];

const newWhyUs = () => (

  <Box sx={{
    width: '100%', paddingTop: '7em', height: '70vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'start',
  }}
  >
    <Typography variant="h3" sx={{ color: 'white' }}> Quick, fast, and easy way to unlock your phone in 3 simple steps </Typography>
    <Typography variant="h6" sx={{ color: 'white' }}> Quick, fast, and easy way to unlock your phone in 3 simple steps </Typography>
    <Box sx={{
      display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', height: '40vh', width: '100%', paddingTop: '3em', gap: '4em',
    }}
    >
      {steps.map(({ title, desc, icon }) => (
        <Box sx={{
          display: 'flex', flexDirection: 'column', height: '40vh', width: '20%', alignItems: 'center',
        }}
        >
          <SvgIcon
            component={icon}
            inheritViewBox
            sx={{
              height: '100px',
              width: '100px',
              color: 'white',
              paddingBottom: '.5em',
            }}
          />
          <Typography
            variant="h4"
            sx={{
              color: 'white',
              paddingBottom: '.5em',
            }}
          >
            {' '}
            {title}
            {' '}
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: 'white',
            }}
          >
            {' '}
            {desc}
            {' '}
          </Typography>
        </Box>
      ))}
    </Box>
    <Button
      variant="contained"
      sx={{
        backgroundColor: 'white', color: '#051650', marginBottom: '1em', '&:hover': { color: 'white' },
      }}
    >
      {' '}
      Start Today!
    </Button>
  </Box>
);

export default newWhyUs;
