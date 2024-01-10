/* eslint-disable max-len */
import {
  Card, CardMedia, Fab, Grid, Typography,
} from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router';
import Navbar from '../../components/navbar/Navbar';
import candado from '../../shared/image/10(3).png';
import bombillo from '../../shared/image/9(3).png';
import maleta from '../../shared/image/11(3).png';
import estrellas from '../../shared/image/12(2).png';
import chip from '../../shared/image/14(2).png';
import audifonos from '../../shared/image/13(2).png';

function Acerca() {
  const navigate = useNavigate();

  const goContactanos = () => {
    navigate('/contactanos');
  };
  return (
    <Grid
      container
      sx={{
        padding: '10px',
        marginTop: '100px',
        width: '100%',
      }}
      spacing={2}
    >
      <Navbar />
      <Fab
        variant="extended"
        sx={{
          position: 'fixed',
          top: '120px',
          right: { xs: '28%', md: '45%' },
          backgroundColor: '#2586AF',
          border: '8px solid #E1A73E',
          padding: '20px',
        }}
        size="large"
        onClick={goContactanos}
      >
        <Typography fontWeight="800"> Contáctanos </Typography>
      </Fab>
      <Grid item xs={12} md={6}>
        <Card
          sx={{
            width: { xs: '90%', md: '90%' },
            padding: '20px',
            backgroundColor: '#2586AF',
            color: 'white',
            borderRadius: '15px',
          }}
        >
          <CardMedia
            component="img"
            src={bombillo}
            sx={{
              width: '75px',
            }}
          />
          <Typography variant="h5" textAlign="center" fontWeight="700">
            Transformadores Digitales a Tu Servicio
          </Typography>
          <Typography textAlign="justify">
            Somos el equipo de Desbloquea Mi Cel, apasionados pioneros en el arte
            de liberar teléfonos inteligentes. Nuestra dedicación se traduce en
            soluciones innovadoras que abren un mundo de posibilidades para nuestros
            clientes, siempre con un enfoque en la seguridad y la satisfacción total.
          </Typography>
        </Card>
      </Grid>
      <Grid item xs={12} md={6} justifyContent="left">
        <Card
          sx={{
            maxWidth: { xs: '90%', md: '90%' }, // Usamos maxWidth para asegurarnos de que el contenido no sea más ancho que el porcentaje especificado
            padding: '20px',
            backgroundColor: '#2586AF',
            color: 'white',
            borderRadius: '15px',
            marginLeft: { sx: '0', md: '10%' },
          }}
        >
          <CardMedia
            component="img"
            src={candado}
            sx={{
              width: '75px',
            }}
          />
          <Typography variant="h5" textAlign="center" fontWeight="700">
            Nuestra Misión
          </Typography>
          <Typography textAlign="justify">
            Nuestra misión es simple pero poderosa: liberar la conectividad y la
            funcionalidad de tu teléfono inteligente. Creemos que todos los
            usuarios deberían tener la capacidad de usar su dispositivo con
            cualquier operador y aprovechar al máximo sus características
            únicas. Con este objetivo en mente, nos esforzamos cada día para
            ofrecer un servicio de liberación de primera clase que sea rápido,
            seguro y efectivo.
          </Typography>
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Card
          sx={{
            width: { xs: '90%', md: '90%' },
            padding: '20px',
            backgroundColor: '#2586AF',
            color: 'white',
            borderRadius: '15px',
          }}
        >
          <CardMedia
            component="img"
            src={maleta}
            sx={{
              width: '75px',
            }}
          />
          <Typography variant="h5" textAlign="center" fontWeight="700">
            Experiencia
          </Typography>
          <Typography textAlign="justify">
            Nuestro equipo está formado por profesionales altamente capacitados
            y apasionados por la tecnología móvil. Con años de experiencia en el
            campo del desbloqueo de teléfonos inteligentes, hemos dominado una
            amplia gama de marcas y modelos, lo que nos permite abordar incluso
            los desafíos más complejos con confianza y destreza.
          </Typography>
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Card
          sx={{
            width: { xs: '90%', md: '85%' },
            padding: '20px',
            backgroundColor: '#2586AF',
            color: 'white',
            borderRadius: '15px',
            marginLeft: { sx: '0', md: '10%' },
          }}
        >
          <CardMedia
            component="img"
            src={estrellas}
            sx={{
              width: '75px',
            }}
          />
          <Typography variant="h5" textAlign="center" fontWeight="700">
            Compromiso con la Calidad
          </Typography>
          <Typography textAlign="justify">
            En Desbloquea Mi Cel, la calidad es nuestra máxima prioridad.
            Utilizamos métodos y herramientas de vanguardia para garantizar que
            tu teléfono se libere de manera segura y sin riesgos. Cada
            desbloqueo es llevado a cabo con precisión y cuidado, respetando la
            integridad de tu dispositivo.
          </Typography>
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Card
          sx={{
            width: { xs: '90%', md: '90%' },
            padding: '20px',
            backgroundColor: '#2586AF',
            color: 'white',
            borderRadius: '15px',
          }}
        >
          <CardMedia
            component="img"
            src={audifonos}
            sx={{
              width: '75px',
            }}
          />
          <Typography variant="h5" textAlign="center" fontWeight="700">
            Atención personalizada
          </Typography>
          <Typography textAlign="justify">
            Sabemos que cada cliente es único, y nuestro compromiso con la
            satisfacción del cliente refleja esta creencia. Nuestro equipo de
            atención al cliente está aquí para guiarte en cada paso del proceso,
            responder a tus preguntas y brindarte asesoramiento personalizado.
            Tu satisfacción es nuestra mayor recompensa.
          </Typography>
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Card
          sx={{
            maxWidth: { xs: '90%', md: '90%' }, // Usamos maxWidth para asegurarnos de que el contenido no sea más ancho que el porcentaje especificado
            padding: '20px',
            backgroundColor: '#2586AF',
            color: 'white',
            borderRadius: '15px',
            marginLeft: { sx: '0', md: '10%' },
          }}
        >
          <CardMedia
            component="img"
            src={chip}
            sx={{
              width: '75px',
            }}
          />
          <Typography variant="h5" textAlign="center" fontWeight="700">
            Únete a la Experiencia
          </Typography>
          <Typography textAlign="justify">
            Si estás buscando un servicio de liberación de teléfonos
            inteligentes confiable y eficiente, no busques más. En Desbloquea Mi
            Cel, estamos listos para brindarte soluciones que transformarán la
            forma en que usas tu dispositivo. Únete a nuestra creciente lista de
            clientes satisfechos y descubre la libertad de elegir.
          </Typography>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Typography
          color="white"
          textAlign="center"
          variant="h4"
          fontWeight="700"
        >
          ¡Gracias por elegir Desbloquea Mi Cel!
        </Typography>
      </Grid>
    </Grid>
  );
}

export default Acerca;
