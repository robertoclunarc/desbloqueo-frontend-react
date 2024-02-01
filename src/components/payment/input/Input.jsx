/* eslint-disable react/prop-types */
import {
  Box, TextField, Typography,
} from '@mui/material';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setOpcionesGlobal } from '../../../store/slices/opciones.slice';

function sumDig(n) {
  let a = 0;
  while (n > 0) {
    a += n % 10;
    // eslint-disable-next-line no-param-reassign
    n = parseInt(n / 10, 10);
  }
  return a;
}

function isValidIMEI(n) {
  const s = n.toString();
  const len = s.length;

  if (len !== 15) return false;

  let sum = 0;
  // eslint-disable-next-line no-plusplus
  for (let i = len; i >= 1; i--) { // Corrected this line
    let d = (n % 10);

    if (i % 2 === 0) d *= 2;

    sum += sumDig(d);
    // eslint-disable-next-line no-param-reassign
    n = parseInt(n / 10, 10);
  }

  return (sum % 10 === 0);
}
function Input() {
  const [valueOptions, setValueOptions] = useState('');
  const [valueOptionsEmail, setValueOptionsEmail] = useState('');
  const dispatch = useDispatch();
  const opciones = useSelector((state) => state.opciones);
  const [msgImei, setMsgImei] = useState('');
  const [msgCorreo, setMsgCorreo] = useState('');

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

  const handleChangeImei = (event) => {
    const inputValue = event.target.value;
    setValueOptions(inputValue);
    if (isValidIMEI(inputValue)) {
      dispatch(setOpcionesGlobal({ id: '5', imei: inputValue }));
      setMsgImei('');
    } else {
      setMsgImei('Por favor ingrese un imei valido');
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
