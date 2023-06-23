/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable no-console */
/* eslint-disable react/button-has-type */
/* eslint-disable react/function-component-definition */
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadStripe } from '@stripe/stripe-js';
import {
  Elements, CardElement, useStripe, useElements,
} from '@stripe/react-stripe-js';
import {
  Box,
  Card,
  Container, Typography, Dialog, Button,
} from '@mui/material';
import axios from 'axios';
import { environments } from '../../environments/environment';
import '../../assets/formPayment.css';
import Resumen from '../resumen/Resumen';
import postCreateOrdenDrSim from '../../api/drsimcreateordenes';
import { setOpcionesGlobal } from '../../store/slices/opciones.slice';
import putDynamobdOrden from '../../api/putDynamodbOrden';

const env = environments;

const CARD_ELEMENT_OPTIONS = {
  style: {
    base: {
      color: '#32325d',
      fontFamily: 'Arial, sans-serif',
      fontSmoothing: 'antialiased',
      fontSize: '16px',
      /* border_color: '#a67106',
      background: '#e4e3e1', */
      '::placeholder': {
        color: '#aab7c4',
      },
    },
    invalid: {
      color: 'red',
      iconColor: 'red',
    },
  },
};

function dosDecimales(n) {
  const t = n.toString();
  const regex = /(\d*.\d{0,2})/;
  return t.match(regex)[0];
}

async function createOrden(idTerminal, idOperador, imei, idService) {
  let servicios = [];
  await postCreateOrdenDrSim(idTerminal, idOperador, imei, idService)
    .then((respuesta) => {
      servicios = respuesta;
    })
    .catch((error) => {
      console.log(error);
    });
  return servicios;
}

const stripePromise = loadStripe(env.key_public);
// eslint-disable-next-line react/prop-types
const CheckoutForm = ({ next }) => {
  const dispatch = useDispatch();
  const [msnSolicitud, setMsnSolicitud] = useState('');
  const opcion = useSelector((state) => state.opciones);
  const idTerminal = opcion[3].idReg;
  const idOperador = opcion[1].idReg;
  const { imei } = opcion[9] !== undefined ? opcion[9] : '';
  const { email } = opcion[10] !== undefined ? opcion[10] : '';
  const idService = opcion[4].idReg;
  let price = opcion[5]?.price;
  price = dosDecimales(price) * 100;
  price = parseInt(price.toString(), 10);
  const stripe = useStripe();
  const element = useElements();
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: element.getElement(CardElement),
    });
    setLoading(true);
    if (!error) {
      console.log(paymentMethod);
      const { id } = paymentMethod;
      try {
        const { data } = await axios.post(env.apiStripeUrl, {
          id,
          // eslint-disable-next-line max-len
          amount: price, /* en stripe los montos van expresados en centavos (entero). monto en dolares multiplicado por 100 centavos */
        });
        console.log(data);
        if (data.message === 'Succesfull Payment') {
          const ticket = await createOrden(idTerminal, idOperador, imei, idService);
          if (ticket?.res.id_ticket) {
            const timestamp = Date.now();
            const fecha = new Date(timestamp);
            const hoy = fecha.toISOString();
            putDynamobdOrden(timestamp, `${ticket?.res.id_ticket}`, hoy, email, `${imei}`, id, `${price}`, 'PENDIENTE');
            setMsnSolicitud(ticket);
            dispatch(setOpcionesGlobal({ id: '12', id_ticket: `${ticket?.res.id_ticket}` }));
            next(7);
          } else {
            setMsnSolicitud('Solicitid: NO Procesada');
          }
          // setLoading(true);
          console.log(ticket);
        }
        element.getElement(CardElement).clear();
      } catch (er) {
        console.log(er);
      }
    } else {
      console.log(error);
    }
  };

  return (
    <div className="div_payment-cardElement">
      <Resumen />
      <div className="form_payment-cardElement">
        <label className="form-label">Tarjeta</label>
        <CardElement options={CARD_ELEMENT_OPTIONS} />
      </div>
      <Button disabled={loading} onClick={handleSubmit} variant="contained">
        {loading ? (
          <div>Cargando...</div>
        ) : 'Pagar'}
      </Button>
      <Button disabled={loading} variant="contained" onClick={() => next(5)}> Anterior </Button>
      <Typography variant="subtitle1" component="div">
        {' '}
        { msnSolicitud?.status }
      </Typography>
    </div>
  );
};

// eslint-disable-next-line react/prop-types
function Pagar({ next }) {
  return (
    <Container sx={{
      width: { xs: '100%', sm: '80%' },
    }}
    >
      <Card sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        alignItems: 'center',
        padding: '5px',
      }}
      >
        <Typography variant="h6" color="primary"> Pagar </Typography>
        <Box sx={{
          display: 'flex',
          gap: '10px',
          padding: '2px',
          justifyContent: 'center',
          width: { xs: '100%', sm: '80%' },
          flexDirection: 'column',
        }}
        >
          <Elements stripe={stripePromise}>
            <CheckoutForm next={next} />
          </Elements>
        </Box>

      </Card>

    </Container>
  );
}

export default Pagar;
