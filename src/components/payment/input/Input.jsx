/* eslint-disable react/prop-types */
import {
  Box, TextField, Typography,
} from '@mui/material';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setOpcionesGlobal } from '../../../store/slices/opciones.slice';

function Input() {
  const [valueOptions, setValueOptions] = useState('');
  const [valueOptionsEmail, setValueOptionsEmail] = useState('');
  const dispatch = useDispatch();

  const handleChangeImei = (event) => {
    const inputValue = event.target.value;
    if (inputValue.length >= 15) {
      setValueOptions(inputValue);
      dispatch(setOpcionesGlobal({ id: '5', imei: inputValue }));
    }
  };
  const handleChangeEmail = (event) => {
    const inputValue = event.target.value;
    const emailPattern = /^\S+@\S+\.\S+$/;
    if (emailPattern.test(inputValue)) {
      setValueOptionsEmail(inputValue);
      dispatch(setOpcionesGlobal({ id: '6', email: inputValue }));
    }
  };

  return (
    <Box sx={{
      display: 'flex', width: { xs: '90%', sm: '60%' }, flexDirection: 'column', padding: '20px', borderRadius: '15px',
    }}
    >
      <Typography sx={{ color: 'white', fontSize: '20px', textAlign: 'left' }}>
        {' '}
        Enter IMEI
        {' '}
        <span style={{ color: 'red' }}>*</span>
        {' '}
      </Typography>
      <TextField sx={{ backgroundColor: 'white' }} color="secondary" id="imei" label="IMEI" variant="filled" onChange={handleChangeImei} defaultValue={valueOptions} />
      <Typography sx={{
        color: 'white', fontSize: '20px', paddingTop: '15px', textAlign: 'left',
      }}
      >
        {' '}
        Enter Email
        <span style={{ color: 'red' }}>*</span>
        {' '}
      </Typography>
      <TextField sx={{ backgroundColor: 'white' }} color="secondary" id="email" label="Correo electronico" variant="filled" onChange={handleChangeEmail} defaultValue={valueOptionsEmail} />
    </Box>
  );
}

export default Input;
