/* eslint-disable indent */
/* eslint-disable space-before-blocks */
/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable camelcase */
/* eslint-disable no-console */
import axios from 'axios';
import { environments } from '../environments/environment';

const env = environments;

const postCreateOrdenDrSim = async (id_terminal, id_operador, imei, id_servicio) => {
  let orden = {};
  // console.log(`${env.apiDrSimCreateOrden}/${id_terminal}/${id_operador}/${imei}/${id_servicio}`);
  try {
    const { data } = await axios.post(`${env.apiDrSimCreateOrden}/${id_terminal}/${id_operador}/${imei}/${id_servicio}`, {});
    // console.log(data);
    orden = data;
  } catch (error) {
    console.error(error);
  }

  return orden;
};

export default postCreateOrdenDrSim;
