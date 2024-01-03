/* eslint-disable max-len */
/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router';
import {
  Box, Typography, Button, Popper,
} from '@mui/material';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import Select from '../../../../components/formik/select/Select';
import { setStatusStore } from '../../../../store/slices/statusDesbloqueo.slice';

const openingForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Initialize states with default values
  const [countriesOptions, setCountriesOptions] = useState([]);
  const [networkOptions, setNetworkOptions] = useState([]);
  const [brandOptions, setBrandOptions] = useState();
  const [devicesOptions, setDevicesOptions] = useState();
  const [showPopper, setShowPopper] = useState(false);
  const opciones = useSelector((state) => state.opciones);
  const [anchorEl, setAnchorEl] = useState(null);

  // Function to fetch countries
  const countries = () => {
    const URL = 'https://2pr78ypovg.execute-api.us-east-1.amazonaws.com/items';
    axios.get(URL)
      .then((response) => {
        setCountriesOptions(response.data.sort((a, b) => {
          if (a.name < b.name) { return -1; } if (a.name > b.name) { return 1; } return 0;
        }));
      })
      .catch((error) => console.error(error));
  };

  // Function to fetch networks
  const networks = () => {
    const URL = 'https://omb7k0gyvj.execute-api.us-east-1.amazonaws.com/items';
    axios.get(URL)
      .then((response) => {
        setNetworkOptions(response.data.sort((a, b) => {
          if (a.name < b.name) { return -1; } if (a.name > b.name) { return 1; } return 0;
        }));
      })
      .catch((error) => console.error(error));
  };

  const brands = () => {
    const URL = 'https://mbt0pse1f1.execute-api.us-east-1.amazonaws.com/items';

    axios.get(URL)
      .then((response) => setBrandOptions(response.data.sort((a, b) => { if (a.name < b.name) { return -1; } if (a.name > b.name) { return 1; } return 0; })))
      .catch((error) => error.data);
  };

  const devices = () => {
    const URL = 'https://eb5dut1866.execute-api.us-east-1.amazonaws.com/items';

    axios.get(URL)
      .then((response) => setDevicesOptions(response.data.sort((a, b) => { if (a.name < b.name) { return -1; } if (a.name > b.name) { return 1; } return 0; })))
      .catch((error) => error.data);
  };

  // Fetch data on component mount
  useEffect(() => {
    countries();
    networks();
    brands();
    devices();
  }, []);

  let opcionesNetworksFilter = [];
  if (opciones[0]?.idReg) {
    opcionesNetworksFilter = networkOptions.filter(
      (item) => item.countryDrSimID === opciones[0].idReg,
    );
  }

  let opcionesDevicesFilter = [];
  if (opciones[2]?.idReg) {
    const opcionesDevices = devicesOptions?.filter((item) => item.brandDrSimID === opciones[2].idReg);
    // eslint-disable-next-line no-unused-vars
    opcionesDevicesFilter = opcionesDevices;
  }

  const goDesbloqueos = (event) => {
    if (opciones.length > 3) {
      navigate('/desbloqueos');
      dispatch(setStatusStore(2));
    } else {
      setShowPopper(!showPopper);
      setAnchorEl(event.currentTarget);
    }
  };

  return (
    <Box sx={{
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'start', width: { xl: '28vw', lg: '40vw', md: '50vw' }, height: { xl: '25vh', lg: 'auto', md: '30vh' }, padding: '15px',
    }}
    >
      <Typography
        color="white"
        sx={{
          textDecoration: 'underline',
          marginBottom: '15px',
          lineHeight: '1em',
          fontSize: {
            xl: '54px', lg: '44px', md: '46px', sm: '36px', xs: '24px',
          },
        }}
        display="inline"
      >
        Pais y operadora

      </Typography>
      <Formik
        initialValues={{
          country: '',
          network: '',

        }}
        validationSchema={Yup.object({
          country: Yup.string()
            .required('Requerido'),
          network: Yup.string()
            .required('Requerido'),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            // eslint-disable-next-line no-alert
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form style={{
          width: '100%', minWidth: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '15px',
        }}
        >
          <Select
            name="country"
            options={countriesOptions}
            label="Pais"
            id={1}
          />
          <Select
            name="network"
            options={opcionesNetworksFilter}
            label="Compañia telefonica"
            id={2}
          />
          <Select
            name="brand"
            options={brandOptions}
            label="Marca"
            id={3}
          />
          <Select
            name="device"
            options={opcionesDevicesFilter}
            label="Modelo"
            id={4}
          />
          <Box sx={{
            display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', width: '100%', paddingTop: '15px',
          }}
          >
            <Button
              variant="contained"
              sx={{ width: '150px', background: 'linear-gradient(to bottom right ,gold, #E1A73E)', color: '#224776' }}
              onClick={goDesbloqueos}
            >
              go

            </Button>
            <Popper open={showPopper} anchorEl={anchorEl} placement="bottom">
              <Box sx={{
                border: 1, p: 1, bgcolor: '#224776', color: '#eee', borderRadius: '5px', marginTop: '5px',
              }}
              >
                Debe llenar todos los campos
              </Box>
            </Popper>
          </Box>
        </Form>
      </Formik>
    </Box>
  );
};

export default openingForm;
