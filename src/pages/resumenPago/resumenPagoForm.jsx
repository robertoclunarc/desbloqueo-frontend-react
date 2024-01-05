/* eslint-disable react/prop-types */
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
  try {
    const respuesta = await postCreateOrdenDrSim(idTerminal, idOperador, imei, idService);
    return respuesta;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

async function crearTicket(opciones) {
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
      putDynamobdOrden(timestamp, `${ticket.id}`, hoy, email, `${imei}`, idService, `${price}`, 'PENDIENTE');
      return {
        message: `Solicitud Procesada con el Nro. de Ticket: ${ticket?.res.id_ticket}`,
        id: ticket?.res.id_ticket,
      };
    } if (ticket && (ticket?.info || ticket?.error || ticket?.message)) {
      // eslint-disable-next-line max-len, no-nested-ternary
      const msg = ticket?.info !== undefined ? ticket?.info : ticket?.error === undefined ? ticket?.message : ticket?.error;
      return {
        message: `Solicitud NO Procesada: ${msg}`,
        id: null,
      };
    }
    return {
      message: 'Solicitud NO Procesada.',
      id: null,
    };
  } catch (error) {
    console.error(error);
    // eslint-disable-next-line no-return-assign
    return {
      message: 'Lo sentimos, Hubo un Problema Para Crear la Orden',
      id: null,
    };
  }
}

function ResumenPagoForm({ setButton }) {
  const { status } = useParams();
  const datosResumen = localStorage.getItem('datosResumen');
  const dispatch = useDispatch();
  const [resTicket, setResTicket] = useState(null);
  dispatch(setOpcionesStore(datosResumen));
  const opcionesString = useSelector((state) => state.opciones);
  const opciones = JSON.parse(opcionesString);

  useEffect(() => {
    const fetchData = async () => {
      if (status === 'success') {
        const ticket = await crearTicket(opciones);
        setResTicket(ticket);
        setButton({ activate: false, ticket: ticket.id });
      } else {
        setResTicket({ message: 'Lo sentimos, Tu Pago Fue Rechazado' });
        setButton({ activate: false, ticket: null });
      }
    };
    fetchData();
  }, []);

  return (
    <>
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
        {resTicket && resTicket.id && (
          <Typography
            sx={{ color: 'black' }}
          >
            Nro. Ticket:
            <span>  </span>
            <span style={{ fontWeight: 'bold' }}>
              {resTicket.id}
            </span>
          </Typography>
        )}
      </Box>
      <Typography
        variant="h6"
        sx={{
          color: '#f0a919',
        }}
      >
        {resTicket && resTicket.message ? (
          <span style={{ fontWeight: 'bold' }}>
            {resTicket.message}
          </span>
        )
          : (
            <span style={{ fontWeight: 'bold' }}>
              Procesando Orden, Por Favor Espere...
            </span>
          )}
      </Typography>
    </>
  );
}

export default ResumenPagoForm;
