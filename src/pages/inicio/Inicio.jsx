import React from 'react';
import { Box, CardMedia, Fab } from '@mui/material';
import { useNavigate } from 'react-router';
import Header from './headerSection/header';
import OpeningSection from './openingSection/openingSection';
import Counter from './counterStats/Counter';
import NewWhyUs from './newWhyUs/newWhyUs';
import IconsWhy from './iconsWhy/iconsWhy';
import Services from './services/Services';
import imagenLateral from '../../shared/image/1(6).png';
import Phone from '../../shared/image/Contáctanos.png';

function Inicio() {
  const navigate = useNavigate();

  const goContactanos = () => {
    navigate('/contactanos');
  };

  return (
    <Box
      sx={{
        flexDirection: 'column',
        display: 'flex',
        justifyContent: 'center',
        gap: '10px',
        alignItems: 'center',
        width: '100%',
        paddingTop: '15px',
        backgroundColor: '#051650',
      }}
    >
      <Fab
        sx={{
          background: `url(${Phone})`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          position: 'fixed',
          top: '150px',
          right: { xs: '10px', sm: '60px' },
          height: '199px',
          width: '99px',
          borderRadius: '5px',
          margin: '0px',
          boxShadow: 'none',
          backgroundColor: 'none',
          '&:hover': {
            backgroundColor: 'none',
          },
          display: {
            xl: 'flex', lg: 'flex', md: 'flex', sm: 'none', xs: 'none',
          },
        }}
        size="large"
        onClick={goContactanos}
      />
      <CardMedia
        component="img"
        src={imagenLateral}
        sx={{
          width: '40%',
          position: 'absolute',
          left: '-20%',
          top: '50%',
          display: {
            xl: 'flex', lg: 'flex', md: 'flex', sm: 'none', xs: 'none',
          },
        }}
      />
      <Header />
      <OpeningSection />
      <Services />
      <Counter />
      <NewWhyUs />
      <IconsWhy />
    </Box>
  );
}

export default Inicio;
