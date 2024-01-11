/* eslint-disable indent */
/* eslint-disable space-before-blocks */
/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable camelcase */
/* eslint-disable no-console */
import axios from 'axios';
import { environments } from '../environments/environment';

const env = environments;

const getToolsDrSim = async (id_terminal, id_operador) => {
  // console.log(`terminal: ${id_terminal}, operador: ${id_operador}`);
  let tools = [];
  try {
    const { data } = await axios.get(`${env.apiDrSimTools}/${id_terminal}/${id_operador}`);
    // console.log(data);
    if (data.status === 'OK'){
       /* console.log({
 code: data.code, status: data.estatus, info: data.info, services: 'Available',
}); */
      tools = data.res.tools;
    } else {
      console.log(data);
      tools[0] = {
        id_tool: 0,
        name: 'Sin Servicio para este Terminal y/o Operadora',
        desc: data.info,
        price: '--',
        time: { min: '--', max: '--' },
        avg: '--',
        tool_type: '--',
      };
    }
  } catch (error) {
    console.error(error);
  }

  return tools;
};

export default getToolsDrSim;
