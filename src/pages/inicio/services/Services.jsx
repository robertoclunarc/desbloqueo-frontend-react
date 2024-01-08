import {
  CardMedia, Container, Grid, Typography,
} from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router';
import apple from '../../../shared/image/25(1).png';
import samsung from '../../../shared/image/22(1).png';
import huawei from '../../../shared/image/20(1).png';
/* import xiaomi from '../../../shared/image/21(1).png';
Diez se ve mejor que once jaja. Si lo quieres de vuelta, simplemente elimina el comentarios. */
import zte from '../../../shared/image/23(1).png';
import alcatel from '../../../shared/image/24(1).png';
import lg from '../../../shared/image/26(1).png';
import tecno from '../../../shared/image/27(1).png';
import sony from '../../../shared/image/28(1).png';
import blackberry from '../../../shared/image/29(1).png';
import motorola from '../../../shared/image/19(1).png';

function Servicios() {
  const navigate = useNavigate();

  const logotipos = [
    apple,
    samsung,
    huawei,
    // xiaomi,
    zte,
    alcatel,
    lg,
    tecno,
    sony,
    blackberry,
    motorola,
  ];

  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '60px',
        width: '100%',
        paddingBottom: '40px',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Typography
        color="white"
        textAlign="center"
        sx={{
          fontSize: {
            xl: '54px', lg: '64px', md: '54px', sm: '36px', xs: '30px',
          },
          width: '100%',
          paddingBottom: '.5em',
          borderBottom: '1px solid #1F9CC8',
          textAlign: 'center',
        }}
      >
        Desde
        {' '}
        <span style={{ color: 'gold' }}>iPhone</span>
        {' '}
        hasta
        {' '}
        <span style={{ color: 'gold' }}>Samsung</span>
        , desbloqueamos todo
      </Typography>
      <Grid
        container
        spacing={{ xs: 2, sm: 2 }}
        justifyContent="center"
        sx={{
          display: 'flex',
          gap: '40px',
          width: '100%',
          marginLeft: '0px',
          '& .MuiGrid-root': {
            marginRight: '-1em',
          },
        }}
      >
        {logotipos.map((logo) => (
          <Grid
            item
            xs={5}
            sm={4}
            md={3}
            lg={2}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'white',
              padding: '20px',
              borderRadius: '10px',
              '&:hover': {
                transform: 'translateY(-3%)',
                transition: 'all 400ms ease',
                cursor: 'pointer',
              },
              boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
            }}
            onClick={() => {
              navigate('/desbloqueos');
            }}
          >
            <CardMedia
              component="img"
              image={logo}
              alt="precios competitivos.img"
              sx={{
                width: { sm: 150, xs: 100 },
                height: { sm: 150, xs: 100 },
                margin: 'auto',
              }}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Servicios;
