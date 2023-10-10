import React from 'react';
import {
  Box, Typography, Autocomplete, TextField, Button,
} from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledAutocomplete = styled(Autocomplete)({
  '& .MuiInputLabel-outlined:not(.MuiInputLabel-shrink)': {
    transform: 'translate(20px, 19px) scale(1);',
  },
  '&.Mui-focused .MuiInputLabel-outlined': {
    color: 'gold',
  },
  '& .MuiAutocomplete-inputRoot': {
    color: 'white',
    '&[class*="MuiOutlinedInput-root"] .MuiAutocomplete-input:first-of-type': {
      paddingLeft: '0px',
    },
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: 'white',
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: 'gold',
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: 'gold',
    },
  },
  '& label': {
    color: 'white',
  },
  '& button': {
    color: 'white',
    '&:hover': {
      color: 'gold',
    },
  },
});

const top100Films = [
  { label: 'The Shawshank Redemption', year: 1994 },
  { label: 'The Godfather', year: 1972 },
  { label: 'The Godfather: Part II', year: 1974 },
];

const openingForm = () => (
  <Box sx={{
    display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'start', width: '28vw', height: '28vh', padding: '15px',
  }}
  >
    <Typography color="white" variant="h4" sx={{ textDecoration: 'underline', marginBottom: '15px' }} display="inline">Pais y operadora</Typography>

    <StyledAutocomplete
      disablePortal
      id="combo-box-demo"
      options={top100Films}
      sx={{ width: '100%', height: '100px' }}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Movie"
        />
      )}
    />

    <StyledAutocomplete
      disablePortal
      id="combo-box-demo"
      options={top100Films}
      sx={{
        width: '100%', height: '100px', color: 'white', paddingBottom: '0px',
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Movie"
        />
      )}
    />
    <Typography color="white" display="inline" sx={{ paddingTop: '0px' }}>Pais y operadora Pais y operadora Pais y operadora Pais y operadora</Typography>
    <Box sx={{
      display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', width: '100%', paddingTop: '15px',
    }}
    >
      <Button variant="contained" sx={{ width: '150px', background: 'linear-gradient(to bottom right ,gold, #E1A73E)', color: '#224776' }}>learn more</Button>
      <Button variant="contained" sx={{ width: '150px', background: 'linear-gradient(to bottom right ,gold, #E1A73E)', color: '#224776' }}>go</Button>
    </Box>
  </Box>
);

export default openingForm;
