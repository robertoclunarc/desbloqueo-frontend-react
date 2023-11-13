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
    setValueOptions(event.target.value);
    dispatch(setOpcionesGlobal({ id: '5', imei: event.target.value }));
  };
  const handleChangeEmail = (event) => {
    setValueOptionsEmail(event.target.value);
    dispatch(setOpcionesGlobal({ id: '6', email: event.target.value }));
  };

  return (
    <Box sx={{
      display: 'flex', width: '90%', flexDirection: 'column', padding: '20px', borderRadius: '15px',
    }}
    >
      <Typography sx={{ color: 'white', fontSize: '20px' }}> Enter IMEI </Typography>
      <TextField sx={{ backgroundColor: 'white' }} color="secondary" id="imei" label="IMEI" variant="filled" onChange={handleChangeImei} defaultValue={valueOptions} />
      <Typography sx={{ color: 'white', fontSize: '20px', paddingTop: '15px' }}> Enter Email </Typography>
      <TextField sx={{ backgroundColor: 'white' }} color="secondary" id="email" label="Correo electronico" variant="filled" onChange={handleChangeEmail} defaultValue={valueOptionsEmail} />
    </Box>
  );
}

export default Input;
