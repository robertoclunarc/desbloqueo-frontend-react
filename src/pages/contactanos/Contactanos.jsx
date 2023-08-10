/* eslint-disable max-len */
import {
  Box,
  Card,
  CardMedia,
  Container,
  Fab,
  Grid,
  Typography,
} from '@mui/material';
import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import ContactForm from './contactForm/ContactForm';
import imagenFondo from '../../shared/image/15(2).png';
import imagenFondoDerecho from '../../shared/image/MicrosoftTeams-image.png';

function Contactanos() {
  return (
    <Container sx={{
      display: 'flex',
      flexDirection: 'column',
      gap: '30px',
      padding: '30px',
      paddingTop: '50px',
    }}
    >
      <Typography variant="h4" color="white" textAlign="center" fontWeight="800">
        ¡Contactanos!
      </Typography>
      <Grid container spacing={2} justifyContent="space-between" padding="20px">
        <Grid item>
          <Fab variant="extended" sx={{ backgroundColor: '#2586AF', color: 'white' }}>
            <PhoneInTalkIcon />
            <Typography> (561) 207-8335</Typography>
          </Fab>
        </Grid>
        <Grid item>
          <Fab variant="extended" sx={{ backgroundColor: '#2586AF', color: 'white' }}>
            <EmailIcon />
            <Typography> ??????????</Typography>
          </Fab>
        </Grid>
        <Grid item>
          <Fab variant="extended" sx={{ backgroundColor: '#2586AF', color: 'white' }}>
            <InstagramIcon />
            <Typography> ??????????</Typography>
          </Fab>
        </Grid>
        <Grid item>
          <Fab variant="extended" sx={{ backgroundColor: '#2586AF', color: 'white' }}>
            <FacebookIcon />
            <Typography> ???????????</Typography>
          </Fab>
        </Grid>
      </Grid>
      <Typography color="white" textAlign="center" variant="h5" fontWeight="700">Registra tus datos y nos comunicaremos contigo</Typography>
      <CardMedia
        component="img"
        src={imagenFondo}
        sx={{
          width: '20%', height: '200px', position: 'absolute', left: '-4%', bottom: '-80% ', objectFit: 'cover',
        }}
      />
      <CardMedia
        component="img"
        src={imagenFondoDerecho}
        sx={{
          width: '30%', height: '80%', position: 'absolute', right: '2%', bottom: '-80% ',
        }}
      />
      <Box
        className="form-Contact"
        sx={{
          padding: { xs: '10px', ms: '30px' },
          justifyContent: 'center',
          display: 'flex',
        }}
      >
        <Card
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            width: 'max-content',
          }}
          variant="outlined"
        >
          <Box
            sx={{
              '& .MuiTextField-root': { mr: 1 },
              padding: { xs: '10px', sm: '30px' },
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
              width: { xs: '250px', sm: '300px' },
            }}
            noValidate
            autoComplete="off"
          >
            <Typography variant="h6" color="initial">
              Escribenos
            </Typography>
            <Formik
              component={ContactForm}
              initialValues={{
                name: '',
                email: '',
                phone: '',
                company: '',
                message: '',
              }}
              validationSchema={Yup.object({
                name: Yup.string()
                  .required('*Requerido'),
                email: Yup.string()
                  .required('*Requerido'),
                phone: Yup.string()
                  .required('*Requerido'),
                company: Yup.string(),
                message: Yup.string()
                  .required('*Requerido'),
              })}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  // eslint-disable-next-line no-alert
                  alert(JSON.stringify(values, null, 2));
                  setSubmitting(false);
                }, 400);
              }}
            />
          </Box>
        </Card>
      </Box>
    </Container>
  );
}

export default Contactanos;
