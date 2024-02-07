/* eslint-disable react/function-component-definition */
/* eslint-disable react/prop-types */
/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import { Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { environments } from '../../environments/environment';
import '../../assets/formPayment.css';
import imgStripe from '../../shared/image/stripe-for-wordpress.png';

const env = environments;
const urlApiStripe = `${env.apiStripeUrl}/create-checkout-session`;

const CheckoutForm = ({ disabledButton }) => {
  const opcion = useSelector((state) => state.opciones);
  let posImei = -1;
  if (opcion[10]?.id === '5') {
    posImei = 10;
  } else if (opcion[11]?.id === '5') {
    posImei = 11;
  }
  let posEmail = -1;
  if (opcion[10]?.id === '6') {
    posEmail = 10;
  } else if (opcion[11]?.id === '6') {
    posEmail = 11;
  }

  const isImeiValid = opcion[posImei]?.imeiValid || false;
  const isEmailValid = opcion[posEmail]?.emailValid || false;
  const idTerminal = opcion[3]?.idReg;
  const idOperador = opcion[1]?.idReg;
  const inpImei = opcion[10]?.imei !== undefined ? opcion[10].imei : '';
  const inpEmail = opcion[11]?.email !== undefined ? opcion[11].email : '';
  const idService = opcion[4]?.idReg;
  const displayPrice = `${opcion[5]?.price}`;
  const [loading, setLoading] = useState(false);
  const [loadingButton, setLoadingButton] = useState(false);

  useEffect(() => {
    if (disabledButton) {
      setLoadingButton(false);
    } else {
      setLoadingButton(true);
    }
  }, [disabledButton]);

  let buttonText = '';
  let mensajeError = '';

  if (isImeiValid === false) {
    mensajeError = 'Por favor complete toda la información';
  }
  if (isEmailValid === false) {
    mensajeError = 'Por favor complete toda la información';
  }
  if (loadingButton) {
    mensajeError = 'Por favor complete la información y acepte los términos y condiciones';
  }
  if (loading) {
    mensajeError = 'Por Favor Espere...';
  }

  if (loadingButton) {
    buttonText = 'Por favor acepta los términos y condiciones';
  } else if (loading) {
    buttonText = 'Cargando ...';
  } else {
    buttonText = 'Pagar';
  }
  // eslint-disable-next-line no-console
  // console.log(`loading: ${loading} || loadinButon: ${loadingButton} || isImeiValid: ${isImeiValid} || isEmailValid: ${isEmailValid}`);
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(urlApiStripe);
    setLoading(true);
    const { data } = await axios.post(urlApiStripe, {
      urlDomain: `${window.location.origin}/desbloqueos`,
      id_terminal: idTerminal,
      id_operador: idOperador,
      id_service: idService,
      imei: inpImei,
      email: inpEmail,
    });
    // Redirige a la URL de Stripe Checkout
    window.location.replace(data.sessionId);
  };
  return (
    <div className="div_payment-cardElement">
      {mensajeError !== '' && (
        <Typography
          sx={{
            color: '#f0a919',
            fontSize: '18px',
            paddingTop: '5px',
            textAlign: 'center',
          }}
        >
          {mensajeError}
        </Typography>
      )}
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
        <button onClick={handleSubmit} className="buttonStripe" type="submit" disabled={(loading || loadingButton || !isImeiValid || !isEmailValid)}>
          {buttonText}
        </button>
      </section>
    </div>
  );
};

function Message({ message }) {
  return (
    <section>
      <p>{message}</p>
    </section>
  );
}

// eslint-disable-next-line no-unused-vars
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
    <CheckoutForm next={next} disabledButton={disabledButton} />
  );
}

export default Pagar;
