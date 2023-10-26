import React from 'react';
import {
  Box, Grid, CardMedia,
} from '@mui/material';
import apple from '../../../../shared/image/25(1).png';
import samsung from '../../../../shared/image/22(1).png';
import huawei from '../../../../shared/image/20(1).png';
import zte from '../../../../shared/image/24(1).png';
import sony from '../../../../shared/image/28(1).png';

const logotipos = [
  apple,
  samsung,
  huawei,
  zte,
  sony,
];

const providers = () => (

  <Box sx={{
    gap: '20px', display: 'flex', flexDirection: 'column', alignItems: 'start', justifyContent: 'start', width: { xl: '35vw', lg: '40vw', md: '60vw' }, height: { xl: '23vh', lg: '30vh' }, paddingTop: '15px', paddingBottom: '25px',
  }}
  >
    <Grid
      container
      justifyContent="center"
      sx={{ display: 'flex', gap: '20px' }}
    >
      {logotipos.map((logo) => (
        <Grid
          item
          xs={3}
          sm={2}
          md={2}
          lg={2}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'white',
            padding: '15px',
            borderRadius: '10px',
            boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
          }}
        >
          <CardMedia
            component="img"
            image={logo}
            alt="precios competitivos.img"
            sx={{ width: { sm: 50, xs: 50 }, height: { sm: 50, xs: 50 }, margin: 'auto' }}
          />
        </Grid>
      ))}
    </Grid>
    <Grid
      container
      justifyContent="center"
      sx={{
        display: {
          xl: 'flex', lg: 'flex', md: 'none', sm: 'none', xs: 'none',
        },
        gap: '20px',
      }}
    >
      {logotipos.map((logo) => (
        <Grid
          item
          xs={8}
          sm={4}
          md={3}
          lg={2}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'white',
            padding: '15px',
            borderRadius: '10px',
            boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
          }}
        >
          <CardMedia
            component="img"
            image={logo}
            alt="precios competitivos.img"
            sx={{ width: { sm: 50, xs: 50 }, height: { sm: 50, xs: 50 }, margin: 'auto' }}
          />
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default providers;
