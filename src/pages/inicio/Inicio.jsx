import React from 'react';
import { useQuery } from '@apollo/client';
import { Box, CardMedia, Fab } from '@mui/material';
import { useNavigate } from 'react-router';
import Navbar from '../../components/navbar/Navbar';
import Header from './headerSection/header';
import OpeningSection from './openingSection/openingSection';
import FeaturedPhones from './featuredPhones/FeaturedPhones';
import Servicios from './services/Services';
import WhyUS from './whyUs/WhyUs';
import Spinner from '../../components/spinner/Spinner';
import { getInicio } from '../../shared/api/contentful/queries';
import imagenLateral from '../../shared/image/1(6).png';
import Phone from '../../shared/image/Contáctanos.png';

function Inicio() {
  const { data, loading } = useQuery(getInicio, {
    variables: { id: '3jDI1X9rZoL25IpElqhGKZ' },
  });

  const inicio = data?.inicio;
  if (loading === false) return <Spinner center />;

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
        paddingTop: '30px',
        alignItems: 'center',
        width: '100%',
        backgroundColor: '#051650',
      }}
    >
      <Navbar />
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
        }}
        size='large'
        onClick={goContactanos}
      />
      <CardMedia
        component='img'
        src={imagenLateral}
        sx={{
          width: '40%',
          position: 'absolute',
          left: '-20%',
          top: '50%',
        }}
      />
      <Header />
      <OpeningSection />
      <FeaturedPhones />
      <WhyUS
        whyUsTitle={inicio?.whyUsTitle}
        whyUsReasons={inicio?.whyUsReasonsCollection.items}
      />
      <Servicios
        servicioTitle={inicio?.servicioTitle}
        servicios={inicio?.serviciosCollection.items}
      />
    </Box>
  );
}

export default Inicio;
