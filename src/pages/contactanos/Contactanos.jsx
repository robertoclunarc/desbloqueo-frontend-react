/* eslint-disable max-len */
import {
  Box,
  CardMedia,
  Container,
  Fab,
  Grid,
  Typography,
} from '@mui/material';
import React from 'react';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import ContactForm from './contactForm/ContactForm';
import imagenFondo from '../../shared/image/15(2).png';
import imagenFondoDerecho from '../../shared/image/MicrosoftTeams-image.png';
import Navbar from '../../components/navbar/Navbar';

function Contactanos() {
  return (
    <Container sx={{
      display: 'flex',
      flexDirection: 'column',
      gap: '30px',
      padding: { xs: '10px', md: '30px' },
      paddingTop: '50px',
    }}
    >
      <Navbar />
      <Typography variant="h4" color="white" textAlign="center" fontWeight="800">
        ¡Contactanos!
      </Typography>
      <Grid container spacing={2} justifyContent="space-between" sx={{ width: '100%' }}>
        <Grid item xs={12} md={3}>
          <Fab variant="extended" sx={{ backgroundColor: '#2586AF', color: 'white' }}>
            <EmailIcon />
            <Typography> servicios@desbloqueamicel.com</Typography>
          </Fab>
        </Grid>
        <Grid item xs={12} md={2}>
          <Fab variant="extended" href="https://instagram.com/desbloqueamicel?igshid=MmIzYWVlNDQ5Yg==" sx={{ backgroundColor: '#2586AF', color: 'white' }}>
            <InstagramIcon />
            <Typography>
              desbloqueamicel
            </Typography>
          </Fab>
        </Grid>
        <Grid item xs={12} md={2}>
          <Fab variant="extended" href="https://www.facebook.com/DesbloqueaMiCel?mibextid=LQQJ4d" sx={{ backgroundColor: '#2586AF', color: 'white' }}>
            <FacebookIcon />
            <Typography>Desbloquea mi Cel</Typography>
          </Fab>
        </Grid>
      </Grid>
      <Typography color="white" textAlign="center" variant="h5" fontWeight="700">Registra tus datos y nos comunicaremos contigo</Typography>
      <CardMedia
        component="img"
        src={imagenFondo}
        sx={{
          width: '20%', height: '200px', position: 'absolute', left: '-4%', bottom: '-27% ', objectFit: 'cover', display: { xs: 'none', md: 'none' },
        }}
      />
      <CardMedia
        component="img"
        src={imagenFondoDerecho}
        sx={{
          width: '30%', height: '80%', position: 'absolute', right: '0%', bottom: '-27% ', display: { xs: 'none', md: 'none' },
        }}
      />
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <ContactForm />
      </Box>
    </Container>
  );
}

export default Contactanos;
