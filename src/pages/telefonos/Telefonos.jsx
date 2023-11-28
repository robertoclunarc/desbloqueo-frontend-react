/* eslint-disable no-plusplus */
/* eslint-disable max-len */
/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable no-unused-vars */
import { Box, Container, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../../components/cards/Card';
import { CONSTANTS } from '../../shared/constants/Constants';
import Pagination from '../../components/pagination/Pagination';
import Navbar from '../../components/navbar/Navbar';

function Telefonos() {
  const [getDevice, setGetDevice] = useState();
  useEffect(() => {
    const URL = 'https://eb5dut1866.execute-api.us-east-1.amazonaws.com/items';

    axios.get(URL)
      .then((response) => {
        setGetDevice(response.data);
      })
      .catch((error) => (error));
  }, []);

  const devicePerPage = 20;

  let arrayDevice = [];

  const [currentPage, setCurrentPage] = useState(1);

  if (getDevice?.length < devicePerPage) {
    arrayDevice = [...getDevice];
  } else {
    const lastDevice = currentPage * devicePerPage;
    arrayDevice = getDevice?.slice(lastDevice - devicePerPage, lastDevice);
  }

  const arrayPages = [];

  const quantityPages = Math.ceil(getDevice?.length / devicePerPage);

  const pagesPerBlock = 5;

  const currentBlock = Math.ceil(currentPage / pagesPerBlock);

  if (currentBlock * pagesPerBlock >= quantityPages) {
    for (let i = currentBlock * pagesPerBlock - pagesPerBlock + 1; i <= quantityPages; i++) {
      arrayPages.push(i);
    }
  } else {
    for (let i = currentBlock * pagesPerBlock - pagesPerBlock + 1; i <= currentBlock * pagesPerBlock; i++) {
      arrayPages.push(i);
    }
  }
  return (
    <Container sx={{ padding: '20px', textAlign: 'center' }}>
      <Navbar />
      <Typography variant="h4" color="white" fontWeight="700" marginTop="60px">Desbloquea mi cel</Typography>
      <Typography variant="h5" color="white">¡Consigue el que necesitas!</Typography>
      <Box sx={{
        display: 'flex',
        gap: '30px',
        justifyContent: 'center',
        flexWrap: 'wrap',
        marginTop: '30px',
        width: '100%',
      }}
      >
        {
          arrayDevice?.map((phone) => (
            <Card
              key={phone.id}
              title={phone.name}
              imgsrc={phone.image}
              buttontext={CONSTANTS.desbloqueamicelULAR}
              id={phone.id}
            />
          ))
        }
      </Box>
      <Pagination
        arrayPages={arrayPages}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        quantityPages={quantityPages}
      />
    </Container>
  );
}

export default Telefonos;
