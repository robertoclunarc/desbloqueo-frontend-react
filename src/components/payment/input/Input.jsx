/* eslint-disable react/prop-types */
import {
  Box, TextField, Typography,
} from '@mui/material';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setOpcionesGlobal } from '../../../store/slices/opciones.slice';

function Input() {
  const [valueOptions, setValueOptions] = useState('');
  const [valueOptionsEmail, setValueOptionsEmail] = useState('');
  const dispatch = useDispatch();
  const opciones = useSelector((state) => state.opciones);
  const [msgImei, setMsgImei] = useState('');
  const [msgCorreo, setMsgCorreo] = useState('');

  const handleChangeImei = (event) => {
    const inputValue = event.target.value;
    if (inputValue.length >= 15) {
      setValueOptions(inputValue);
      dispatch(setOpcionesGlobal({ id: '5', imei: inputValue }));
      setMsgImei('');
    } else {
      setMsgImei('Por favor ingrese un imei valido');
    }
  };
  const handleChangeEmail = (event) => {
    const inputValue = event.target.value;
    const emailPattern = /^\S+@\S+\.\S+$/;
    if (emailPattern.test(inputValue)) {
      setValueOptionsEmail(inputValue);
      dispatch(setOpcionesGlobal({ id: '6', email: inputValue }));
      setMsgCorreo('');
    } else {
      setMsgCorreo('Por favor ingresa un Correo electronico valido');
    }
  };

  return (
    <Box sx={{
      display: 'flex', width: { xs: '90%', sm: '60%' }, flexDirection: 'column', padding: '20px', borderRadius: '15px',
    }}
    >
      <Typography sx={{ color: 'white', fontSize: '20px', textAlign: 'left' }}>
        {' '}
        Ingresa tu IMEI
        {' '}
        <span style={{ color: 'red' }}>*</span>
        {' '}
      </Typography>
      <Typography sx={{ color: '#C62907', fontSize: '15px' }}>{msgImei}</Typography>
      <TextField sx={{ backgroundColor: 'white' }} color="secondary" id="imei" label="IMEI" variant="filled" onChange={handleChangeImei} defaultValue={opciones[10]?.imei || valueOptions} />
      <Typography sx={{
        color: 'white', fontSize: '20px', paddingTop: '15px', textAlign: 'left',
      }}
      >
        {' '}
        Ingresa tu Correo electronico
        <span style={{ color: 'red' }}>*</span>
        {' '}
      </Typography>
      <Typography sx={{ color: '#C62907', fontSize: '15px' }}>{msgCorreo}</Typography>
      <TextField sx={{ backgroundColor: 'white' }} color="secondary" id="email" label="Correo electronico" variant="filled" onChange={handleChangeEmail} defaultValue={opciones[11]?.email || valueOptionsEmail} />
    </Box>
  );
}

export default Input;
