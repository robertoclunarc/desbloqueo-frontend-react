/* eslint-disable react/prop-types */
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router';
// eslint-disable-next-line import/no-extraneous-dependencies
// eslint-disable-next-line no-unused-vars

function MediaCard({
  title,
  text,
  buttontext,
  imgsrc,
  id,
}) {
  const navigate = useNavigate();
  return (
    <Card
      sx={{
        backgroundColor: '#2586AF', borderRadius: '20px', width: '250px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
      }}
      onClick={() => {
        navigate(`/telefonos/${id}`);
      }}
    >
      <CardMedia component="img" image={imgsrc} sx={{ height: '200px', objectFit: 'contain' }} />
      <CardContent>
        <Typography color="white">
          {title}
        </Typography>
        <Typography>
          {text}
        </Typography>
        <Button
          variant="contained"
          onClick={() => {
            navigate(`/telefonos/${id}`);
          }}
          sx={{ backgroundColor: '#2586AF', border: '2px solid #E1A73E', borderRadius: '20px' }}
        >
          {buttontext}
        </Button>
      </CardContent>
    </Card>
  );
}

Card.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  buttontext: PropTypes.string,
  buttonhref: PropTypes.string,
  imgsrc: PropTypes.string,
};

Card.defaultProps = {
  title: '',
  text: '',
  buttontext: '',
  buttonhref: '',
  imgsrc: '',
};

export default MediaCard;
