/* eslint-disable no-console */
import axios from 'axios';
import { environments } from '../environments/environment';

const env = environments;

const getCheckoutSession = async (idReg) => {
  let ticket;
  try {
    ticket = await axios.get(`${env.apiStripeUrl}/checkout/${idReg}`);
  } catch (error) {
    console.error(error);
  }

  return ticket;
};

export default getCheckoutSession;
