import React from 'react';
import { Box, CardMedia, Typography } from '@mui/material';
import WifiIcon from '@mui/icons-material/Wifi';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import mujer from '../../../shared/image/cutbottompic.png';
import OpeningForm from './openingForm/openingForm';
import Providers from './providers/providers';

const openingSection = () => (
  <Box
    sx={{
      gap: { xl: '50px', lg: '30px' },
      display: 'flex',
      flexDirection: {
        xl: 'row', lg: 'column', md: 'column', sm: 'column', xs: 'column',
      },
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: '50%',
      paddingBottom: '9em',
    }}
  >
    <Box
      sx={{
        display: 'flex',
        flexDirection: {
          xl: 'column', lg: 'column-reverse', md: 'column-reverse', sm: 'column-reverse', xs: 'column-reverse',
        },
        alignItems: { xl: 'center', lg: 'center', md: 'center' },
        justifyContent: 'center',
      }}
    >
      <Providers />
      <OpeningForm />
    </Box>
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '500px',
        gap: '20px',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'start',
          background: 'linear-gradient(to bottom right ,#091a30, blue)',
          borderRadius: '4%',
          width: '500px',
          height: '80%',
          border: '1px solid white',
          boxShadow:
            'rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            width: '70%',
            gap: '35px',
            paddingTop: '15px',
          }}
        >
          <Box
            sx={{
              width: '25%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Box
              sx={{
                height: '50px',
                width: '50px',
                borderRadius: '50%',
                border: '2px solid white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <WifiIcon sx={{ color: 'white', transform: 'scale(1.2)' }} />
            </Box>
            <Typography
              sx={{
                paddingTop: '5px',
                margin: '0px',
                fontWeight: 'bold',
                color: 'white',
                textAlign: 'center',
              }}
            >
              Connecting
            </Typography>
          </Box>
          <Box
            sx={{
              width: '25%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Box
              sx={{
                height: '50px',
                width: '50px',
                borderRadius: '50%',
                border: '2px solid white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <LockOpenIcon sx={{ color: 'white', transform: 'scale(1.2)' }} />
            </Box>
            <Typography
              sx={{
                paddingTop: '5px',
                margin: '0px',
                fontWeight: 'bold',
                color: 'white',
                textAlign: 'center',
              }}
            >
              Unlocking
            </Typography>
          </Box>
          <Box
            sx={{
              width: '25%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Box
              sx={{
                height: '50px',
                width: '50px',
                borderRadius: '50%',
                border: '2px solid white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <LocalAtmIcon sx={{ color: 'white', transform: 'scale(1.2)' }} />
            </Box>
            <Typography
              sx={{
                paddingTop: '5px',
                margin: '0px',
                fontWeight: 'bold',
                color: 'white',
                textAlign: 'center',
              }}
            >
              Saving
            </Typography>
          </Box>
        </Box>
        <CardMedia
          component="img"
          src={mujer}
          sx={{
            width: '100%',
            height: '80%',
          }}
        />
      </Box>
    </Box>
  </Box>
);

export default openingSection;
