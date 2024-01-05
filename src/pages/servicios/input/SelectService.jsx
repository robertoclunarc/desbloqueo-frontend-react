/* eslint-disable quote-props */
/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { useField } from 'formik';
import {
  Box, FormControl, InputLabel, MenuItem, Typography,
} from '@mui/material';
import PropTypes from 'prop-types';
import Select from '@mui/material/Select';
import { useDispatch, useSelector } from 'react-redux';
import { setOpcionesGlobal } from '../../../store/slices/opciones.slice';
import getToolsDrSim from '../../../api/drsimtools';

function SelectService({
  label, id, ...props
}) {
  let tools = [];
  let descripcion;
  const [descriptionText, setDescriptionText] = useState('Please choose a Servico before continuing.');
  const [field, meta] = useField(props);
  const [valueOptions, setValueOptions] = useState('');
  const [price, setPrice] = useState('');
  const [timeMin, setTimeMin] = useState('');
  const [timeMax, setTimeMax] = useState('');
  const [type, setType] = useState('');
  const [avg, setAvg] = useState('');
  const [toolType, setToolType] = useState('');
  const opciones = useSelector((state) => state.opciones);
  const [options, setToolOptions] = useState([]);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  function buscarElementoAsync(services, idServ) {
    return new Promise((resolve) => {
      const serviceFinded = services.find((elemento) => elemento.id === idServ);
      if (serviceFinded) {
        resolve(serviceFinded);
      }
    });
  }

  function resumir(textoLargo) {
    const chater = '.';
    let newText = '';
    const arr = textoLargo.split(chater);
    newText = arr[0] + chater + arr[1] + chater + arr[3] + chater;
    if (newText.length < 415 && arr[4]) {
      newText += arr[4];
    }
    return newText;
  }

  const handleChange = async (event) => {
    setValueOptions(event.target.value);
    descripcion = await buscarElementoAsync(options, event.target.value);
    console.log(descripcion, 'descripcion JDMA');
    if (descripcion) {
      descripcion.desc = resumir(descripcion?.desc);
      descripcion.desc = descripcion.desc.replace(/undefined/g, '').replace(/\s{2,}/g, ' ');
      descripcion.desc = descripcion.desc.replace(/[.!?]+$/, '.').trim();
      const descripcionType = descripcion?.type ? descripcion?.type : 'dias';
      setDescriptionText(descripcion.desc);
      setPrice(descripcion?.price);
      setTimeMin(descripcion?.timeMin);
      setTimeMax(descripcion?.timeMax);
      setType(descripcionType);
      setAvg(descripcion?.avg);
      setToolType(descripcion?.toolType);
    }
    dispatch(setOpcionesGlobal({ [label]: descripcion.name, id: `${id}`, idReg: `${event.target.value}` }));
    dispatch(setOpcionesGlobal({ id: '8', price: `${descripcion.price}` }));
    dispatch(setOpcionesGlobal({ id: '9', timeMin: `${descripcion.timeMin}` }));
    dispatch(setOpcionesGlobal({ id: '10', timeMax: `${descripcion.timeMax}` }));
    dispatch(setOpcionesGlobal({ id: '11', avg: `${descripcion.avg}` }));
    dispatch(setOpcionesGlobal({ id: '12', type: `${descripcion.type}` }));
  };

  const getTools = async () => {
    let servicios = [];
    // eslint-disable-next-line camelcase
    const id_terminal = opciones[3].idReg;
    // eslint-disable-next-line camelcase
    const id_operador = opciones[1].idReg;
    await getToolsDrSim(id_terminal, id_operador)
      .then((respuesta) => {
        servicios = respuesta;
      })
      .catch((error) => {
        console.log(error);
      });
    return servicios;
  };

  useEffect(() => {
    const fetchData = async () => {
      if (opciones[3]?.idReg !== undefined && opciones[1] !== undefined) {
        try {
          const optionsTools = await getTools();
          tools = optionsTools.map((opt) => {
            const tool = {
              id: opt.id_tool,
              name: opt.name,
              desc: opt.desc,
              price: opt.price,
              timeMin: opt.time.min,
              timeMax: opt.time.max,
              type: opt.time.type,
              avg: opt.avg,
              toolType: opt.tool_type,
            };
            return tool;
          });
          setToolOptions(tools);
          setValueOptions(options[0]?.id); // Esto selecciona la primera opción
          handleChange({ target: { value: options[0]?.id } });
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchData();
  }, [loading]);

  useEffect(() => {
    if (options.length === 1 && options[0].name === 'Sin Servicio para este Terminal y/o Operadora') {
      setValueOptions(options[0].id);
    }
  }, [options]);

  // eslint-disable-next-line eqeqeq
  descripcion = options?.find((descrip) => descrip.id == valueOptions);
  // descripcion = buscarElementoAsync(options, valueOptions);
  const currentOption = options.find((option) => option.id === valueOptions);

  return (
    <Box sx={{
      display: 'flex',
      gap: '10px',
      padding: '20px',
      justifyContent: 'start',
      alignItems: 'center',
      width: '100%',
      flexDirection: 'column',
    }}
    >
      <FormControl sx={{ width: { xs: '80%', sm: '40%' }, backgroundColor: '#fff' }} variant="filled">
        <InputLabel id={field.name}>{label}</InputLabel>
        <Select
          labelId={field.name}
          id={field.name}
          value={valueOptions}
          onChange={handleChange}
          label={label}
          sx={{ backgroundColor: 'white' }}
        >
          {options?.map((option) => (
            <MenuItem key={option.id} value={option.id}>
              {option.name}
            </MenuItem>
          ))}
        </Select>
        {meta.touched && meta.error ? (
          <div className="error">{meta.error}</div>
        ) : null}
      </FormControl>
      {currentOption && currentOption.name !== 'Sin Servicio para este Terminal y/o Operadora' ? (
        <Box sx={{
          background: 'linear-gradient(90deg, hsla(1, 84%, 80%, 1) 0%, hsla(56, 100%, 50%, 1) 100%)', width: { xs: '80%', sm: '60%' }, height: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: { xs: 'white', sm: '#2C5B97' }, flexWrap: 'wrap', border: { xs: '2px solid black', sm: '2px solid black' }, borderRadius: '15px', padding: '1em 0em 1em 0em', margin: { xs: 'none', sm: '1em 0em 0em 0em' },
        }}
        >
          <Typography sx={{ color: 'black', padding: '10px' }}>
            Precio:
            {' '}
            <span style={{ fontWeight: 'bold' }}>
              $
              {price}
              ,
            </span>
          </Typography>
          <Typography sx={{ color: 'black', padding: '10px' }}>
            Tiempo Minimo y Maximo:
            <span style={{ fontWeight: 'bold' }}>
              {` ${timeMin} ${type} - ${timeMax} ${type}`}
              ,
            </span>
          </Typography>
          <Typography sx={{ color: 'black', padding: '10px' }}>
            Tiempo Promedio:
            <span style={{ fontWeight: 'bold' }}>
              {' '}
              {avg}
              ,
            </span>
          </Typography>
          <Typography sx={{ color: 'black', padding: '10px' }}>
            Requerimientos:
            <span style={{ fontWeight: 'bold' }}>
              {' '}
              {toolType}
            </span>
          </Typography>
          {' '}
          <Typography sx={{
            display: { xs: 'none', sm: 'inline' }, color: 'black', textAlign: 'center', width: '100%', borderTop: '1px solid black', padding: '1em',
          }}
          >
            Descripción:
          </Typography>
          <Typography sx={{
            display: { xs: 'none', sm: 'inline' }, color: 'black', fontWeight: 'bold', textAlign: 'left', width: '80%',
          }}
          >
            {currentOption && currentOption.name === 'Sin Servicio para este Terminal y/o Operadora'
              ? 'Sin Servicio para este Terminal y/o Operadora'
              : descriptionText}
          </Typography>
        </Box>
      )
        : (
          <Box sx={{
            background: 'linear-gradient(90deg, hsla(1, 84%, 80%, 1) 0%, hsla(56, 100%, 50%, 1) 100%)', width: { xs: '80%', sm: '60%' }, height: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: { xs: 'white', sm: '#2C5B97' }, flexWrap: 'wrap', border: { xs: '2px solid black', sm: '2px solid black' }, borderRadius: '15px', padding: '1em 0em 1em 0em', margin: { xs: 'none', sm: '1em 0em 0em 0em' },
          }}
          >
            <Typography>
              Sin Servicio para este Terminal y/o Operadora
            </Typography>
          </Box>
        )}
    </Box>
  );
}

Select.propTypes = {
  label: PropTypes.string,
}.isRequired;

Select.defaultProps = {
  label: '',
};

export default SelectService;
