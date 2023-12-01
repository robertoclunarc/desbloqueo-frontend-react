import React from 'react';
import { Box, CardMedia } from '@mui/material';
import Header from './headerSection/header';
import OpeningSection from './openingSection/openingSection';
import Counter from './counterStats/Counter';
import NewWhyUs from './newWhyUs/newWhyUs';
import IconsWhy from './iconsWhy/iconsWhy';
import Services from './services/Services';
import imagenLateral from '../../shared/image/1(6).png';
import Navbar from '../../components/navbar/Navbar';

function Inicio() {
  return (
    <Box
      sx={{
        flexDirection: 'column',
        display: 'flex',
        justifyContent: 'center',
        gap: '10px',
        alignItems: 'center',
        width: '100%',
        paddingTop: '5em',
        backgroundColor: '#0F5986',
      }}
    >
      <Navbar />
      <CardMedia
        component="img"
        src={imagenLateral}
        sx={{
          width: '40%',
          position: 'absolute',
          left: '-20%',
          top: '50%',
          display: {
            xl: 'flex',
            lg: 'flex',
            md: 'flex',
            sm: 'none',
            xs: 'none',
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
