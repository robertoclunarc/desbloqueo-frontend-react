/* eslint-disable react/function-component-definition */
/* eslint-disable react/prop-types */
/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { environments } from '../../environments/environment';
import '../../assets/formPayment.css';
import imgStripe from '../../shared/image/stripe-for-wordpress.png';

const env = environments;
const urlApiStripe = `${env.apiStripeUrl}/create-checkout-session`;

/* function dosDecimales(n) {
  const t = n.toString();
  const regex = /(\d*.\d{0,2})/;
  return t.match(regex)[0];
} */

const CheckoutForm = ({ disabledButton }) => {
  const opcion = useSelector((state) => state.opciones);
  const isImeiValid = opcion[5]?.imeiValid || false;
  const isEmailValid = opcion[6]?.emailValid || false;
  const idTerminal = opcion[3]?.idReg;
  const idOperador = opcion[1]?.idReg;
  const inpImei = opcion[10]?.imei !== undefined ? opcion[10].imei : '';
  const inpEmail = opcion[11]?.email !== undefined ? opcion[11].email : '';
  const idService = opcion[4]?.idReg;
  // const prdName = opcion[3].Modelo !== undefined ? opcion[3].Modelo : 'Modelo no especificado';
  // const dscService = opcion[4].Servicio !== undefined ? opcion[4].Servicio : 'Servicio sin especificacion';
  const displayPrice = `${opcion[5]?.price}`;
  /* let price = opcion[5]?.price;
  price = price ? dosDecimales(price) * 100 : 0;
  price = parseInt(price.toString(), 10); */
  const [loading, setLoading] = useState(false);
  const [loadingButton, setLoadingButton] = useState(false);

  // console.log(opcion);

  useEffect(() => {
    if (disabledButton) {
      setLoadingButton(false);
    } else {
      setLoadingButton(true);
    }
  }, [disabledButton]);

  let buttonText = '';

  if (loadingButton) {
    buttonText = 'Por favor cumpla con los requisitos';
  } else if (loading) {
    buttonText = 'Cargando ...';
  } else {
    buttonText = 'Pagar';
  }

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
        <button onClick={handleSubmit} className="buttonStripe" type="submit" disabled={loading || loadingButton || !isImeiValid || !isEmailValid}>
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
