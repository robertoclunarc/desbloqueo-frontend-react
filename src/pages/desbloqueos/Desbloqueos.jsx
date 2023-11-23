/* eslint-disable max-len */
import {
  Container,
  Typography,
  Box,
  Button,
  SvgIcon,
  CardMedia,
} from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router';
import DesbloqueosForm from './form/DesbloqueosForm';
import { ReactComponent as Check } from '../../shared/image/checked.svg';
import mujer from '../../shared/image/1(6).png';

const checkedOptions = [
  {
    icon: Check,
    title: 'Guaranteed or Money Back',
  },
  {
    icon: Check,
    title: 'Thousands of Satisfied Customers',
  },
  {
    icon: Check,
    title: 'Lowest Price Guaranteed',
  },
];

function Desbloqueos() {
  const navigate = useNavigate();

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
    }}
    >
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
            Unlock iPhone 15 Pro Max

          </Typography>
          <Typography sx={{
            color: 'white',
            fontSize: {
              xl: '30px', lg: '30px', md: '24px', sm: '24px', xs: '18px',
            },
          }}
          >
            Unlock your iPhone 15 Pro Max to choose any operator in the world.

          </Typography>
          <Button
            variant="contained"
            sx={{
              marginTop: {
                xl: '1em', lg: '1em', md: '.5em', sm: '.5em', xs: '2em',
              },
              backgroundColor: 'white',
              color: '#051650',
              marginBottom: '1em',
              width: {
                xl: '60%', lg: '60%', md: '60%', sm: '50%', xs: '50%',
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
