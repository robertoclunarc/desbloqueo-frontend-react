import React from 'react';
import {
  Box, Typography, SvgIcon, Button,
} from '@mui/material';
import { useNavigate } from 'react-router';
import { ReactComponent as One } from '../../../shared/image/one.svg';
import { ReactComponent as Two } from '../../../shared/image/two.svg';
import { ReactComponent as Three } from '../../../shared/image/three.svg';

const steps = [
  {
    title: 'Fill Out Form',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis ultrices orci, ut vulputate augue. Phasellus tincidunt enim at augue tempor finibus. Nulla at luctus libero, in pharetra.',
    desc2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis ultrices orci, ut vulputate augue. Phasellus tincidunt enim at augue tempor finibus. Nulla at luctus libero, in pharetra.',
    icon: One,
  },
  {
    title: 'Car Gets Shipped',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis ultrices orci, ut vulputate augue. Phasellus tincidunt enim at augue tempor finibus. Nulla at luctus libero, in pharetra.',
    desc2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis ultrices orci, ut vulputate augue. Phasellus tincidunt enim at augue tempor finibus. Nulla at luctus libero, in pharetra.',
    icon: Two,
  },
  {
    title: 'Car Gets Delivered',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis ultrices orci, ut vulputate augue. Phasellus tincidunt enim at augue tempor finibus. Nulla at luctus libero, in pharetra.',
    desc2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis ultrices orci, ut vulputate augue. Phasellus tincidunt enim at augue tempor finibus. Nulla at luctus libero, in pharetra.',
    icon: Three,
  },
];

const newWhyUs = () => {
  const navigate = useNavigate();

  return (

    <Box sx={{
      width: '100%', paddingTop: '7em', height: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'start',
    }}
    >
      <Typography
        sx={{
          color: 'white',
          textAlign: 'center',
          fontSize: {
            xl: '54px', lg: '54px', md: '32px', sm: '36px', xs: '30px',
          },
          paddingBottom: '.5em',
          borderBottom: '1px solid #1F9CC8',
        }}
      >
        {' '}
        Quick
        {' '}
        <Box sx={{
          display: {
            xl: 'inline', lg: 'inline', md: 'inline', sm: 'none', xs: 'none',
          },
        }}
        >
          , fast, and easy
          {' '}

        </Box>
        {' '}
        way to unlock your phone in 3 simple steps
        {' '}

      </Typography>
      <Box sx={{
        display: 'flex',
        flexDirection: {
          xl: 'row', lg: 'row', md: 'column', sm: 'column', xs: 'column',
        },
        alignItems: 'center',
        justifyContent: 'center',
        height: 'auto',
        width: '100%',
        paddingTop: {
          xl: '3em', lg: '1em', md: '2em', sm: '2em', xs: '2em',
        },
        gap: {
          xl: '4em', lg: '1.5em', md: '2em', sm: '2em', xs: '2em',
        },
      }}
      >
        {steps.map(({
          title, desc, desc2, icon,
        }) => (
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              height: {
                xl: '55vh', lg: '40vh', md: '30vh', sm: '30vh', xs: 'auto',
              },
              width: {
                xl: '25%', lg: '28%', md: '50vw', sm: '80vw', xs: '80%',
              },
              alignItems: 'center',
              border: '3px solid white',
              padding: '1em',
              borderRadius: '15px',
              '&:hover': { cursor: 'pointer' },
            }}
            onClick={() => {
              navigate('/desbloqueos');
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
            <Typography
              variant="h6"
              sx={{
                color: 'white',
                display: {
                  xl: 'inline', lg: 'none', md: 'none', sm: 'none', xs: 'none',
                },
              }}
            >
              {' '}
              {desc2}
              {' '}
            </Typography>
          </Box>
        ))}
      </Box>
      <Button
        variant="contained"
        sx={{
          marginTop: {
            xl: '3em', lg: '1em', md: '.5em', sm: '.5em', xs: '2em',
          },
          backgroundColor: 'white',
          color: '#051650',
          marginBottom: '1em',
          width: {
            xl: 'auto', lg: 'auto', md: 'auto', sm: '50%', xs: '50%',
          },
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

export default newWhyUs;
