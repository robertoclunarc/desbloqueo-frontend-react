/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable no-console */
/* eslint-disable react/button-has-type */
/* eslint-disable react/function-component-definition */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Typography, Button } from '@mui/material';
import axios from 'axios';
import { environments } from '../../environments/environment';
import '../../assets/formPayment.css';
import postCreateOrdenDrSim from '../../api/drsimcreateordenes';
import imgStripe from '../../shared/image/stripe-for-wordpress.png';

const env = environments;
const urlApiStripe = `${env.apiStripeUrl}/create-checkout-session`;

function dosDecimales(n) {
  const t = n.toString();
  const regex = /(\d*.\d{0,2})/;
  return t.match(regex)[0];
}

// eslint-disable-next-line react/prop-types
const CheckoutForm = ({ next, disabledButton }) => {
  const [msnSolicitud, setMsnSolicitud] = useState('');
  const opcion = useSelector((state) => state.opciones);
  const idTerminal = opcion[3].idReg;
  const idOperador = opcion[1].idReg;
  const { imei } = opcion[9] !== undefined ? opcion[9] : '';
  const { email } = opcion[10] !== undefined ? opcion[10] : '';
  const idService = opcion[4].idReg;
  const prdName = opcion[3].Modelo !== undefined ? opcion[3].Modelo : 'Modelo no especificado';
  const dscService = opcion[4].Servicio !== undefined ? opcion[4].Servicio : 'Servicio sin especificacion';
  const displayPrice = `${opcion[5]?.price}`;
  let price = opcion[5]?.price;
  price = dosDecimales(price) * 100;
  price = parseInt(price.toString(), 10);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(urlApiStripe);
    setLoading(true);
    const { data } = await axios.post(urlApiStripe, {
      urlDomain: `${window.location.origin}/resumenPago`,
      id_terminal: idTerminal,
      id_operador: idOperador,
      id_service: idService,
    });
    // Redirige a la URL de Stripe Checkout
    window.location.replace(data.sessionId);
  };
  return (
    <div className="div_payment-cardElement">
      <section>
        <div className="product">
          <img
            className="imgStripe"
            src={imgStripe}
            alt="Stripe"
          />
          <div className="descriptionStripe">
            <h3 className="h3Stripe">Monto a Pagar</h3>
            <h5 className="h5Stripe">
              $
              {displayPrice}
            </h5>
          </div>
        </div>
        <button onClick={handleSubmit} className="buttonStripe" type="submit" disabled={loading}>
          {loading ? 'Cargando...' : 'Pagar'}
        </button>
      </section>
      <Button
        disabled={loading}
        variant="contained"
        onClick={() => next(2)}
      >
        Anterior
      </Button>
      <Typography variant="subtitle1" component="div">
        {' '}
        {msnSolicitud?.status}
      </Typography>
    </div>
  );
};

const Message = ({ message }) => (
  <section>
    <p>{message}</p>
  </section>
);

function Pagar({ next, disabledButton }) {
  const [message, setMessage] = useState('');
  const opcion = useSelector((state) => state.opciones);
  // Convierte tu estado a formato de cadena (puede ser JSON en este caso)
  const estadoString = JSON.stringify(opcion);
  // Guarda el estado en el localStorage
  localStorage.setItem('datosResumen', estadoString);

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);

    if (query.get('success')) {
      setMessage('Order placed! You will receive an email confirmation');
    }

    if (query.get('canceled')) {
      setMessage(
        'Order canceled -- continue to shop around and checkout when you are ready.',
      );
    }
  }, []);

  return message ? (
    <Message message={message} />
  ) : (
    <CheckoutForm />
  );
}

export default Pagar;
