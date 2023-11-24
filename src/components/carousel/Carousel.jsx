import React, { useState } from 'react';
import { Box } from '@mui/material';
import { getFeaturedPhones } from '../../shared/api/getPhones';

const classImg = ['', 'second-img', 'third-img'];

function Carousel() {
  const phones = getFeaturedPhones();
  const [indexClass, setIndexClass] = useState(0);

  const clickNext = () => {
    const nextClass = indexClass + 1;
    if (nextClass > classImg.length - 1) {
      setIndexClass(0);
    } else {
      setIndexClass(nextClass);
    }
  };

  setInterval(clickNext, 10000);
  return (
    <div className="slider">
      <div className={`slider__container ${classImg[indexClass]}`}>
        {phones?.map((phone) => (
          <Box component="img" className="slider__imgs" key={phone.id} src={phone.image} alt="imagenes" />
        ))}
      </div>
      <div className="puntitos-container">
        <Box
          onClick={() => setIndexClass(0)}
          className={
            indexClass === 0 ? 'puntitos puntitos__active' : 'puntitos'
          }
        />
        <Box
          onClick={() => setIndexClass(1)}
          className={
            indexClass === 1 ? 'puntitos puntitos__active' : 'puntitos'
          }
        />
        <Box
          onClick={() => setIndexClass(2)}
          className={
            indexClass === 2 ? 'puntitos puntitos__active' : 'puntitos'
          }
        />
      </div>
    </div>
  );
}

export default Carousel;
