import React, { useState, useEffect } from 'react';
import { Box, Fade, IconButton, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const images = [
  'https://www.srishanmugajewellery.com/wp-content/uploads/2023/07/05-_-Left.jpg',
  'https://www.hellodiamonds.com/upload/blog/home_banner_104_05_15_2018.jpg',
  'https://t4.ftcdn.net/jpg/05/27/71/81/360_F_527718147_x7XDK929xZnZqjgh0oPYz7xK0EvtnlIF.jpg',
  'https://images.bhimagold.com/admin/collection/images/1729254637143-Women.jpg',
  'https://www.srishanmugajewellery.com/wp-content/uploads/2023/07/05-_-Right.jpg',
  'https://img.freepik.com/premium-vector/jewelry-fashion-banner-social-media-banner_1084608-914.jpg?semt=ais_hybrid&w=740',
];

function AutoSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hovered, setHovered] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <Box
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      sx={{
        position: 'relative',
        width: '85%',
        height: { xs: '300px', sm: '400px', md: '500px' },
        overflow: 'hidden',
        margin: '0 auto',
        borderRadius: 2,
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
              top: 0,
              left: 0,
              objectFit: 'cover',
              opacity: idx === currentIndex ? 1 : 0,
              transition: 'opacity 1s ease-in-out',
              zIndex: idx === currentIndex ? 1 : 0,
            }}
          />
        </Fade>
      ))}

      {/* Left Arrow */}
      {(hovered || isMobile) && (
        <IconButton
          onClick={goToPrevious}
          sx={{
            position: 'absolute',
            top: '50%',
            left: 10,
            transform: 'translateY(-50%)',
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            color: '#fff',
            '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.6)' },
            zIndex: 2,
          }}
        >
          <ArrowBackIosNewIcon />
        </IconButton>
      )}

      {/* Right Arrow */}
      {(hovered || isMobile) && (
        <IconButton
          onClick={goToNext}
          sx={{
            position: 'absolute',
            top: '50%',
            right: 10,
            transform: 'translateY(-50%)',
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            color: '#fff',
            '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.6)' },
            zIndex: 2,
          }}
        >
          <ArrowForwardIosIcon />
        </IconButton>
      )}
    </Box>
  );
}

export default AutoSlider;
