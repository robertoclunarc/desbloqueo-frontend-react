import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#224776',
    },
    otherColor: {
      main: '#fff',
    },
    secondary: {
      main: '#E1A73E',
    },
    tertiaryColor: {
      main: '#1F9CC8',
    },
    formColor: {
      main: '#000000',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
});

export default theme;
