/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import {
  Box,
  Button,
  Card, Checkbox, Container, FormControlLabel, IconButton, Stack, Step, StepLabel, Stepper, Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import Check from '@mui/icons-material/Check';
import AddCircleIcon from '@mui/icons-material/AddCircle';
/* import PersonIcon from '@mui/icons-material/Person'; */
import PaymentIcon from '@mui/icons-material/Payment';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import EditNoteIcon from '@mui/icons-material/EditNote';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import axios from 'axios';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Pagar from '../../pagar/Pagar';
import Select from '../../../components/formik/select/Select';
import Input from '../../../components/payment/input/Input';
import SelectService from '../../servicios/input/SelectService';
import Resumen from '../../resumen/Resumen';

const QontoStepIconRoot = styled('div')(({ theme, ownerState }) => ({
  color: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#eaeaf0',
  display: 'flex',
  height: 10,
  alignItems: 'center',
  ...(ownerState.active && {
    color: '#784af4',
  }),
  '& .QontoStepIcon-completedIcon': {
    color: '#784af4',
    zIndex: 1,
    fontSize: 18,
  },
  '& .QontoStepIcon-circle': {
    width: 8,
    height: 8,
    borderRadius: '50%',
    backgroundColor: 'currentColor',
  },
}));

function QontoStepIcon(props) {
  const { active, completed, className } = props;

  return (
    <QontoStepIconRoot ownerState={{ active }} className={className}>
      {completed ? (
        <Check className="QontoStepIcon-completedIcon" />
      ) : (
        <div className="QontoStepIcon-circle" />
      )}
    </QontoStepIconRoot>
  );
}

QontoStepIcon.propTypes = {
  active: PropTypes.bool,
  className: PropTypes.string,
  completed: PropTypes.bool,
};

QontoStepIcon.defaultProps = {
  active: false,
  className: '',
  completed: false,
};

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 25,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor:
      theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
    borderRadius: 1,
  },
}));

const ColorlibStepIconRoot = styled('div')(({ theme, ownerState }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#ccc',
  zIndex: 1,
  color: '#fff',
  width: 50,
  height: 50,
  display: 'flex',
  borderRadius: '50%',
  justifyContent: 'center',
  alignItems: 'center',
  ...(ownerState.active && {
    backgroundImage:
      'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
  }),
  ...(ownerState.completed && {
    backgroundImage:
      'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
  }),
}));

function ColorlibStepIcon(props) {
  const {
    active, completed, className, icon,
  } = props;

  const icons = {
    1: <EditNoteIcon name="services" />,
    2: <AddCircleIcon name="imei" />,
    /* 4: <PersonIcon name="Terms and Conditions" />, */
    3: <PaymentIcon name="Finish" />,
    4: <CheckCircleIcon name="payment" />,
  };

  return (
    <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
      {icons[String(icon)]}
    </ColorlibStepIconRoot>
  );
}

ColorlibStepIcon.propTypes = {
  active: PropTypes.bool,
  className: PropTypes.string,
  completed: PropTypes.bool,
  icon: PropTypes.node,
};

ColorlibStepIcon.defaultProps = {
  active: false,
  className: '',
  completed: false,
  icon: '',
};

const steps = ['Información del Telefono', 'Elige tu Servicio', 'Verificación y Pago', 'Final'];

function DesbloqueosForm() {
  const navigate = useNavigate();
  const options = useSelector((state) => state.opciones);
  // handleCreateData();
  const [formActivePanel, setFromActivePanel] = useState({
    formActivePanelId: 1,
    formActivePanelChange: false,
  });

  const [countriesOptions, setCountriesOptions] = useState();
  const [networkOptions, setNetworkOptions] = useState();
  const [brandOptions, setBrandOptions] = useState();
  const [devicesOptions, setDevicesOptions] = useState();
  // const [networksOptionsFilter, setNetworksOptionsFilter] = useState();
  const opciones = useSelector((state) => state.opciones);
  const idTicket = opciones[11]?.id_ticket;

  const countries = () => {
    const URL = 'https://2pr78ypovg.execute-api.us-east-1.amazonaws.com/items';

    axios.get(URL)
      .then((response) => setCountriesOptions(response.data.sort((a, b) => { if (a.name < b.name) { return -1; } if (a.name > b.name) { return 1; } return 0; })))
      .catch((error) => error.data);
  };

  const networks = () => {
    const URL = 'https://omb7k0gyvj.execute-api.us-east-1.amazonaws.com/items';

    axios.get(URL)
      .then((response) => setNetworkOptions(response.data.sort((a, b) => { if (a.name < b.name) { return -1; } if (a.name > b.name) { return 1; } return 0; })))
      .catch((error) => error.data);
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

  useEffect(() => {
    countries();
    networks();
    brands();
    devices();
  }, []);
  let opcionesNetworksFilter = [];
  if (opciones[0]?.idReg) {
    const opcionesNetworks = networkOptions?.filter((item) => item.countryDrSimID === opciones[0].idReg);
    // eslint-disable-next-line no-unused-vars
    opcionesNetworksFilter = opcionesNetworks;
  }
  let opcionesDevicesFilter = [];
  if (opciones[2]?.idReg) {
    const opcionesDevices = devicesOptions?.filter((item) => item.brandDrSimID === opciones[2].idReg);
    // eslint-disable-next-line no-unused-vars
    opcionesDevicesFilter = opcionesDevices;
  }
  const handleNextPrevClick = (active) => {
    setFromActivePanel({
      formActivePanelId: active,
      formActivePanelChange: true,
    });
  };

  const handleSubmission = () => {
    setFromActivePanel({
      formActivePanelId: formActivePanel.formActivePanelId + 1,
      formActivePanelChange: true,
    });
    // eslint-disable-next-line no-alert
    console.log('Form submitted!');
    navigate('/');
  };

  const disabledPais = options[0] && options[1] ? undefined : 'disabled';
  const disabledMarca = options[2] && options[3] ? undefined : 'disabled';
  let disabledServicio = 'disabled';

  if (options[4]?.Servicio !== 'Sin Servicio para este Terminal y/o Operadora') {
    disabledServicio = undefined;
  } else {
    disabledServicio = 'disabled';
  }

  const [aceptarTerminos, setAceptarTerminos] = useState(false);
  const [recibirBoletin, setRecibirBoletin] = useState(false);
  const disabledButton = (aceptarTerminos && recibirBoletin);
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      gap: '150px',
      textAlign: 'center',
      height: 'auto',
    }}
    >
      <Formik
        style={{ height: 'auto' }}
        initialValues={{
          country: '',
          network: '',
          brand: '',
          device: '',

        }}
        validationSchema={Yup.object({
          country: Yup.string()
            .required('Requerido'),
          network: Yup.string()
            .required('Requerido'),
          brand: Yup.string()
            .required('Requerido'),
          device: Yup.string()
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
        <Form>
          <Container sx={{
            width: {
              xs: '100%', sm: '100%', md: '80%', lg: '80%', xl: '80%',
            },
            position: 'relative',
            height: 'auto',
          }}
          >
            {formActivePanel.formActivePanelId === 1 && (
              <Card sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                paddingBottom: '30px',
                borderRadius: '35px',
                backgroundColor: '#224776',
                height: { xs: '500px', sm: 'auto' },
                border: '2px solid white',
                justifyContent: 'end',
                boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
                paddingTop: '8em',

              }}
              >
                <Stack sx={{ width: '100%', paddingBottom: '4em' }} spacing={4}>
                  <Stepper
                    alternativeLabel
                    activeStep={formActivePanel.formActivePanelId - 1}
                    connector={<ColorlibConnector />}
                    sx={{ display: { xs: 'flex', sm: 'flex' } }}
                  >
                    {
                      steps.map((label) => (
                        <Step key={label}>
                          <StepLabel StepIconComponent={ColorlibStepIcon}>
                            <Typography sx={{ fontSize: '12px', color: 'white' }}>
                              {
                                label
                              }
                            </Typography>
                          </StepLabel>
                        </Step>
                      ))
                    }
                  </Stepper>
                </Stack>
                <Box sx={{
                  border: '2px solid white', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'absolute', background: 'linear-gradient(90deg, hsla(1, 84%, 80%, 1) 0%, hsla(56, 100%, 50%, 1) 100%)', width: { xs: '100px', sm: '150px' }, height: { xs: '100px', sm: '150px' }, top: { xs: '-8%', sm: '-11%' }, borderRadius: '50%',
                }}
                >
                  <EditNoteIcon name="services" sx={{ height: { xs: '50px', sm: '100px' }, width: { xs: '50px', sm: '100px' }, color: 'black' }} />

                </Box>
                <Box sx={{
                  display: 'flex',
                  gap: '30px',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: { xs: '90%', sm: '100%' },
                  flexDirection: 'column',
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
                </Box>
                <IconButton disabled={disabledPais} onClick={() => handleNextPrevClick(2)} sx={{ marginTop: '20px', border: '1px solid white', background: 'linear-gradient(90deg, hsla(1, 84%, 80%, 1) 0%, hsla(56, 100%, 50%, 1) 100%)' }}>
                  <ArrowForwardIcon sx={{ color: 'black' }} fontSize="large" />
                </IconButton>
              </Card>
            )}
            {formActivePanel.formActivePanelId === 2 && (
              <Card sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                paddingBottom: '30px',
                borderRadius: '35px',
                backgroundColor: '#2c5b97',
                height: { xs: 'auto', sm: 'auto' },
                border: '2px solid white',
                justifyContent: 'end',
                boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
                paddingTop: '6em',

              }}
              >
                <Stack sx={{ width: '100%', paddingBottom: '1em' }} spacing={4}>
                  <Stepper
                    alternativeLabel
                    activeStep={formActivePanel.formActivePanelId - 1}
                    connector={<ColorlibConnector />}
                    sx={{ display: { xs: 'flex', sm: 'flex' } }}
                  >
                    {
                      steps.map((label) => (
                        <Step key={label}>
                          <StepLabel StepIconComponent={ColorlibStepIcon}>
                            <Typography sx={{ fontSize: '12px', color: 'white' }}>
                              {
                                label
                              }
                            </Typography>
                          </StepLabel>
                        </Step>
                      ))
                    }
                  </Stepper>
                </Stack>
                <Box sx={{
                  border: '2px solid white', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'absolute', background: 'linear-gradient(90deg, hsla(1, 84%, 80%, 1) 0%, hsla(56, 100%, 50%, 1) 100%)', width: { xs: '100px', sm: '150px' }, height: { xs: '100px', sm: '150px' }, top: { xs: '-6%', sm: '-13%' }, borderRadius: '50%',
                }}
                >
                  <AddCircleIcon name="imei" sx={{ height: { xs: '50px', sm: '100px' }, width: { xs: '50px', sm: '100px' }, color: 'black' }} />

                </Box>
                <Box sx={{
                  display: 'flex',
                  gap: '30px',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: { xs: '100%', sm: '100%' },
                  flexDirection: 'column',
                }}
                >
                  <SelectService
                    name="tools"
                    label="Servicios"
                    id={7}
                  />
                </Box>
                <Box sx={{ display: 'flex', gap: { xs: '10px', sm: '100px' }, flexDirection: 'row' }}>
                  <IconButton onClick={() => handleNextPrevClick(1)} sx={{ marginTop: '20px', border: '1px solid white', background: 'linear-gradient(90deg, hsla(1, 84%, 80%, 1) 0%, hsla(56, 100%, 50%, 1) 100%)' }}>
                    <ArrowBackIcon sx={{ color: 'black' }} fontSize="large" />
                  </IconButton>
                  <IconButton disabled={disabledServicio} onClick={() => handleNextPrevClick(3)} sx={{ marginTop: '20px', border: '1px solid white', background: 'linear-gradient(90deg, hsla(1, 84%, 80%, 1) 0%, hsla(56, 100%, 50%, 1) 100%)' }}>
                    <ArrowForwardIcon sx={{ color: 'black' }} fontSize="large" />
                  </IconButton>
                </Box>
              </Card>
            )}
            {formActivePanel.formActivePanelId === 3 && (
              <div>
                <div>
                  <Card sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    paddingBottom: '30px',
                    borderRadius: '35px',
                    backgroundColor: '#2c5b97',
                    height: { xs: 'auto', sm: 'auto' },
                    border: '2px solid white',
                    justifyContent: 'end',
                    boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
                    paddingTop: '8em',
                  }}
                  >
                    <Stack sx={{ width: '100%', paddingBottom: '4em' }} spacing={4}>
                      <Stepper
                        alternativeLabel
                        activeStep={formActivePanel.formActivePanelId - 1}
                        connector={<ColorlibConnector />}
                        sx={{ display: { xs: 'flex', sm: 'flex' } }}
                      >
                        {
                          steps.map((label) => (
                            <Step key={label}>
                              <StepLabel StepIconComponent={ColorlibStepIcon}>
                                <Typography sx={{ fontSize: '12px', color: 'white' }}>
                                  {
                                    label
                                  }
                                </Typography>
                              </StepLabel>
                            </Step>
                          ))
                        }
                      </Stepper>
                    </Stack>
                    <Box sx={{
                      border: '2px solid white', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'absolute', background: 'linear-gradient(90deg, hsla(1, 84%, 80%, 1) 0%, hsla(56, 100%, 50%, 1) 100%)', width: { xs: '100px', sm: '150px' }, height: { xs: '100px', sm: '150px' }, top: { xs: '-4%', sm: '-6%' }, borderRadius: '50%',
                    }}
                    >
                      <PaymentIcon name="Finish" sx={{ height: { xs: '50px', sm: '100px' }, width: { xs: '50px', sm: '100px' }, color: 'black' }} />

                    </Box>
                    <Resumen />
                    <Input Next={handleNextPrevClick} />
                    <Typography variant="h5" fontWeight="700" color="white">
                      Servicios de desbloqueos
                    </Typography>
                    <FormControlLabel control={<Checkbox color="secondary" checked={aceptarTerminos} onChange={(e) => setAceptarTerminos(e.target.checked)} />} label="Aceptar los términos  y condiciones" style={{ color: 'white' }} id="checkbox" />
                    <FormControlLabel control={<Checkbox color="secondary" checked={recibirBoletin} onChange={(e) => setRecibirBoletin(e.target.checked)} />} label="Recibir boletín informativo" style={{ color: 'white' }} id="checkbox2" />
                    <Pagar disabledButton={disabledButton} next={handleNextPrevClick} />
                  </Card>
                </div>
              </div>
            )}
            {formActivePanel.formActivePanelId === 4 && (
              <Card sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '20px',
              }}
              >
                <Typography variant="h6">Completado!</Typography>
                {idTicket !== undefined ? (
                  <div>
                    <Typography textAlign="center">
                      <strong>{`Solicitud Creada. Nro. Ticket: ${idTicket}.`}</strong>
                      <br />
                      <strong>Pronto estará recibiendo en su correo el estatus de su solicitud.</strong>
                    </Typography>
                    <Box sx={{
                      display: 'flex', gap: { xs: '10px', sm: '100px' }, flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'center', marginTop: '20px',
                    }}
                    >
                      {' '}
                      <Button variant="contained" onClick={() => handleSubmission()}>Submit</Button>
                    </Box>
                  </div>
                ) : (
                  // This block will be executed if idTicket is undefined
                  <Typography variant="body1" textAlign="center">
                    <strong>No se ha recibido un número de ticket válido.</strong>
                    <br />
                    <strong>Por favor, inténtelo nuevamente más tarde o contactenos.</strong>
                  </Typography>
                )}
              </Card>
            )}
          </Container>
        </Form>
      </Formik>
    </Box>
  );
}

export default DesbloqueosForm;
