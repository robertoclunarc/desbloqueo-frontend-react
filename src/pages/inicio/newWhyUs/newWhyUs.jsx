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
    title: 'Proporcione información esencial',
    desc: 'Para iniciar el proceso de liberación de su celular, es crucial que nos brinde información clave. El dato más importante es el IMEI de su dispositivo. Este número único de identificación lo puede encontrar fácilmente: simplemente vaya a la sección Acerca en la configuración de su celular o marque *#06# para que se muestre en pantalla. Además del IMEI, necesitamos conocer la marca y modelo de su teléfono, así como la operadora telefónica con la que está actualmente registrado. Esta información nos permite personalizar el proceso de desbloqueo para su dispositivo específico, asegurando un servicio rápido y eficiente',
    desc2: '',
    icon: One,
  },
  {
    title: 'Su orden activa nuestro servicio',
    desc: 'Una vez que realice su orden y seleccione el servicio adecuado, activaremos nuestro proceso de desbloqueo especialmente diseñado para su dispositivo. Nuestro equipo trabajará diligentemente para generar las instrucciones precisas de desbloqueo adaptadas a las especificaciones únicas de su modelo. Al concluir este proceso, le enviaremos un correo electrónico con instrucciones detalladas y personalizadas sobre cómo completar el desbloqueo de su celular. Dado que cada modelo tiene su propio método de desbloqueo, es crucial que nos proporcione una dirección de correo electrónico a la que tenga acceso regular, para garantizar que reciba estas instrucciones vitales sin demora. De esta manera, nos aseguramos de brindarle una guía clara y fácil de seguir para finalizar el proceso de manera exitosa.',
    desc2: '',
    icon: Two,
  },
  {
    title: 'Complete el proceso de liberación',
    desc: 'Este es el paso final hacia la libertad de su teléfono. Al recibir nuestro correo electrónico, encontrará instrucciones claras y concisas diseñadas específicamente para su modelo de celular. Dependiendo de su dispositivo, esto podría implicar ingresar un código de desbloqueo que le proporcionaremos, o, en el caso de los dispositivos iPhone, conectar su celular a los servidores de Apple siguiendo un procedimiento simple. Entendemos que puede tener preguntas o necesitar asistencia adicional durante este proceso, por lo que nuestro equipo de soporte está disponible para ayudarle. Si necesita ayuda, no dude en contactarnos a través de nuestra página Contáctanos. Nos comprometemos a responder a todas las consultas en menos de 24 horas, asegurando que tenga la asistencia necesaria para completar el desbloqueo de manera eficiente y sin complicaciones.',
    desc2: '',
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
        Rapido,
        {' '}
        <Box sx={{
          display: {
            xl: 'inline', lg: 'inline', md: 'inline', sm: 'none', xs: 'none',
          },
        }}
        >
          legal, y
          {' '}
          <span style={{ color: 'gold' }}>confiable</span>
          {' '}
        </Box>
        {' '}
        libera tu celular en 3 simples pasos
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
                xl: '100vh', lg: '110vh', md: '90vh', sm: '90vh', xs: 'auto',
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
        ¡Libera tu celular ya!
      </Button>
    </Box>
  );
};

export default newWhyUs;
