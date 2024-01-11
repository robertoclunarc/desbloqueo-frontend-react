/* eslint-disable no-console */
/* eslint-disable camelcase */
import axios from 'axios';
import { environments } from '../environments/environment';

const env = environments;

const putDynamobdOrden = async (id, id_ticket, date, email, imei, id_payment, price, estatus) => {
  let orden = {};
  const ticket = {
    id,
    id_ticket,
    date,
    email,
    imei,
    id_payment,
    price,
    estatus,
  };
  // console.log(ticket);
  try {
    const { data } = await axios.put(`${env.apiGatewayOrdenTicket}`, ticket);
    // console.log(data);
    orden = data;
  } catch (error) {
    console.error(error);
  }

  return orden;
};

export default putDynamobdOrden;
