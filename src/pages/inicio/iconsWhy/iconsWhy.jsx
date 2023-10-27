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

const iconsWhy = () => {
  const navigate = useNavigate();

  return (

    <Box sx={{
      width: '100%', paddingTop: '7em', height: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'start',
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
          borderBottom: '1px solid gold',
          textAlign: 'center',
        }}
      >
        {' '}
        Why Unlock Your Phone With Desbloquea
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
            xs={8}
            sm={8}
            md={5}
            lg={2.5}
            xl={2.5}
            sx={{
              '&:hover': { cursor: 'pointer' }, padding: '1em', display: 'flex', alignItems: 'center', justifyContents: 'center', flexDirection: 'column', borderRadius: '15px', border: '3px solid white',
            }}
            onClick={() => {
              navigate('/desbloqueos');
            }}
          >
            <Box sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'start',
              width: '100%',
              height: '10vh',
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
                  paddingBottom: '.5em',
                }}
              />
              <Typography sx={{
                color: 'white',
                fontSize: {
                  xl: '44px', lg: '34px', md: '40px', sm: '40px', xs: '34px',
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
        Start Today!
      </Button>
    </Box>
  );
};

export default iconsWhy;
