import React from 'react';
import {
  Box, Typography, Grid, SvgIcon, Button,
} from '@mui/material';
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
    title: 'Trusty',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    logo: Dollar,
    title: 'Priced',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    logo: Globe,
    title: 'Worldwide',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    logo: Heart,
    title: 'Passion',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    logo: Lightening,
    title: 'Quick',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    logo: LightBulb,
    title: 'Tech',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    logo: Medal,
    title: 'Top',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    logo: Verified,
    title: 'Safe',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
];

const iconsWhy = () => (

  <Box sx={{
    width: '100%', paddingTop: '7em', height: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'start',
  }}
  >
    <Typography variant="h3" sx={{ color: 'white' }}> Why Unlock Your Phone With Desbloquea </Typography>
    <Typography variant="h6" sx={{ color: 'white' }}> Quick, fast, and easy way to unlock your phone in 3 simple steps </Typography>
    <Grid
      container
      spacing={3}
      sx={{
        marginTop: '2em', display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}
    >
      {iconsOptions.map(({ logo, title, desc }) => (
        <Grid
          item
          xs={8}
          sx={{
            display: 'flex', alignItems: 'center', justifyContents: 'center', flexDirection: 'column',
          }}
        >
          <Box sx={{
            display: 'flex', alignItems: 'center', justifyContent: 'start', width: '100%', height: '10vh',
          }}
          >
            <SvgIcon
              component={logo}
              inheritViewBox
              sx={{
                height: '50px',
                width: '50px',
                color: 'white',
                paddingBottom: '.5em',
              }}
            />
            <Typography variant="h3" sx={{ color: 'white', marginLeft: '.5em' }}>{title}</Typography>
          </Box>
          <Typography sx={{ color: 'white' }}>{desc}</Typography>
        </Grid>
      ))}

    </Grid>
    <Button
      variant="contained"
      sx={{
        backgroundColor: 'white', color: '#051650', marginTop: '3em', '&:hover': { color: 'white' },
      }}
    >
      {' '}
      Start Today!
    </Button>
  </Box>
);

export default iconsWhy;
