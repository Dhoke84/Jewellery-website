import React, { useState, useEffect } from 'react';
import { Box, Fade } from '@mui/material';

const images = [
  'https://www.srishanmugajewellery.com/wp-content/uploads/2023/07/05-_-Left.jpg',
  'https://images.bhimagold.com/admin/collection/images/1729254637143-Women.jpg',
  'https://www.hellodiamonds.com/upload/blog/home_banner_104_05_15_2018.jpg',
  'https://t4.ftcdn.net/jpg/05/27/71/81/360_F_527718147_x7XDK929xZnZqjgh0oPYz7xK0EvtnlIF.jpg',
];

function AutoSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        position: 'relative',
        width: '85%',
       
        height: { xs: '300px', sm: '400px', md: '500px' },
        overflow: 'hidden',
        margin: '0 auto', // centers horizontally
        borderRadius: 2, // optional: rounded corners
      }}
    >
      {images.map((img, idx) => (
        <Fade in={idx === currentIndex} key={idx} timeout={1000}>
          <Box
            component="img"
            src={img}
            alt={`Slide ${idx + 1}`}
            sx={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              top: 30,
            
              left: 0,
              objectFit: 'cover',
              opacity: idx === currentIndex ? 1 : 0,
              transition: 'opacity 1s ease-in-out',
              zIndex: idx === currentIndex ? 1 : 0,
            }}
          />
        </Fade>
      ))}
    </Box>
  );
}

export default AutoSlider;
