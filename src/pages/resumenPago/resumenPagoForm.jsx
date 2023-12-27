/* eslint-disable no-console */
/* eslint-disable react/forbid-prop-types */
import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { setOpcionesStore/* , setOpcionesGlobal */ } from '../../store/slices/opciones.slice';
import postCreateOrdenDrSim from '../../api/drsimcreateordenes';
import putDynamobdOrden from '../../api/putDynamodbOrden';

async function createOrden(idTerminal, idOperador, imei, idService) {
  let servicios = [];
  // console.log(`term:${idTerminal}, oper:${idOperador}, imei:${imei}, serv:${idService}`);
  await postCreateOrdenDrSim(idTerminal, idOperador, imei, idService)
    .then((respuesta) => {
      servicios = respuesta;
    })
    .catch((error) => {
      console.log(error);
      throw error;
    });
  return servicios;
}

async function ResumenPagoForm() {
  const { status } = useParams();
  const datosResumen = localStorage.getItem('datosResumen');
  const dispatch = useDispatch();
  const [msnSolicitud, setMsnSolicitud] = useState(null);
  const [loading, setLoading] = useState(false);
  const [resTicket, setResTicket] = useState(null);
  dispatch(setOpcionesStore(datosResumen));
  const opcionesString = useSelector((state) => state.opciones);
  const opciones = JSON.parse(opcionesString);
  useEffect(() => {
    const fetchData = async () => {
      if (status === 'success') {
        const price = opciones[5]?.price;
        const idTerminal = opciones[3]?.idReg;
        const idOperador = opciones[1]?.idReg;
        const { imei } = opciones[10] || '';
        const { email } = opciones[11] || '';
        const idService = opciones[4]?.idReg;
        try {
          const ticket = await createOrden(idTerminal, idOperador, imei, idService);
          if (ticket?.res?.id_ticket) {
            const timestamp = Date.now();
            const fecha = new Date(timestamp);
            const hoy = fecha.toISOString();
            putDynamobdOrden(timestamp, `${ticket?.res.id_ticket}`, hoy, email, `${imei}`, idService, `${price}`, 'PENDIENTE');
            setResTicket(ticket);
            setMsnSolicitud(`Solicitud procesada, Nro. Ticket: ${ticket.res.id_ticket}`);
            setLoading(false);
          } else {
            setMsnSolicitud('Solicitud: NO Procesada!');
            setLoading(true);
          }
          console.log(msnSolicitud);
          console.log(loading);
        } catch (error) {
          console.error(error);
          setMsnSolicitud('Hubo un error al procesar la solicitud.');
          setLoading(true);
        }
      }
    };

    fetchData();
  }, [status, opciones]);

  return (
    <Box
      sx={{
        padding: '2em', gap: '.5em', background: 'linear-gradient(90deg, hsla(1, 84%, 80%, 1) 0%, hsla(56, 100%, 50%, 1) 100%)', width: { xs: '80%', sm: '55%' }, height: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: { xs: 'white', sm: '#2C5B97' }, flexWrap: 'wrap', border: { xs: '2px solid black', sm: '2px solid black' }, borderRadius: '15px',
      }}
    >
      <Typography
        sx={{ color: 'black' }}
      >
        Pais:
        <span>  </span>
        <span style={{ fontWeight: 'bold' }}>
          {opciones[0].Pais}
          ,
        </span>

      </Typography>
      <Typography
        sx={{ color: 'black' }}
      >
        Operadora:
        <span>  </span>
        <span style={{ fontWeight: 'bold' }}>
          {opciones[1]['Compañia telefonica']}
          ,
        </span>
      </Typography>
      <Typography
        sx={{ color: 'black' }}
      >
        Marca:
        <span>  </span>
        <span style={{ fontWeight: 'bold' }}>
          {opciones[2]?.Marca}
          ,
        </span>
      </Typography>
      <Typography
        sx={{ color: 'black' }}
      >
        Modelo:
        <span>  </span>
        <span style={{ fontWeight: 'bold' }}>
          {opciones[3]?.Modelo}
          ,
        </span>

      </Typography>
      <Typography
        sx={{ color: 'black' }}
      >
        Tiempo:
        <span>  </span>
        <span style={{ fontWeight: 'bold' }}>
          {` ${opciones[6]?.timeMin} ${opciones[9]?.type} - ${opciones[7]?.timeMax} ${opciones[9]?.type}`}
        </span>
      </Typography>
      <Typography
        sx={{ color: 'black' }}
      >
        Promedio:
        <span>  </span>
        <span style={{ fontWeight: 'bold' }}>
          {opciones[8]?.avg}
          ,
        </span>

      </Typography>
      <Typography
        sx={{ color: 'black' }}
      >
        Monto Pagado:
        <span>  </span>
        <span style={{ fontWeight: 'bold' }}>
          $
          {opciones[5]?.price}
        </span>
      </Typography>
      <Typography
        sx={{ color: 'black' }}
      >
        Nro. Ticket:
        <span>  </span>
        {resTicket && (
          <span style={{ fontWeight: 'bold' }}>
            dgfdsgfdgfdsg
          </span>
        )}
      </Typography>
    </Box>
  );
}

export default ResumenPagoForm;
