import React, { useState, useEffect } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import {
  Box, Typography, Button,
} from '@mui/material';
import axios from 'axios';
import { useSelector } from 'react-redux';
import Select from '../../../../components/formik/select/Select';

const openingForm = () => {
  // Initialize states with default values
  const [countriesOptions, setCountriesOptionsHome] = useState([]);
  const [networkOptions, setNetworkOptionsHome] = useState([]);
  const opciones = useSelector((state) => state.opciones);

  // Function to fetch countries
  const countries = () => {
    const URL = 'https://2pr78ypovg.execute-api.us-east-1.amazonaws.com/items';
    axios.get(URL)
      .then((response) => setCountriesOptionsHome(response.data))
      .catch((error) => console.error(error));
  };

  // Function to fetch networks
  const networks = () => {
    const URL = 'https://omb7k0gyvj.execute-api.us-east-1.amazonaws.com/items';
    axios.get(URL)
      .then((response) => setNetworkOptionsHome(response.data))
      .catch((error) => console.error(error));
  };

  // Fetch data on component mount
  useEffect(() => {
    countries();
    networks();
  }, []);

  let opcionesNetworksFilter = [];
  if (opciones[0]?.idReg) {
    opcionesNetworksFilter = networkOptions.filter(
      (item) => item.countryDrSimID === opciones[0].idReg,
    );
  }

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
          <Box sx={{
            display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', width: '100%', paddingTop: '15px',
          }}
          >
            <Button variant="contained" sx={{ width: '150px', background: 'linear-gradient(to bottom right ,gold, #E1A73E)', color: '#224776' }}>go</Button>
          </Box>
        </Form>
      </Formik>
    </Box>
  );
};

export default openingForm;
