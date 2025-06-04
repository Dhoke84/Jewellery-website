// components/JewelleryCategories.jsx
import React, { useState } from 'react';
import { Box, Typography, Grid, Button, useMediaQuery, useTheme } from '@mui/material';


const categories = [
  { name: 'CHAINS', icon: 'https://www.krajewellers.com/shop/assets/uploads/product_images/20220106115456_3_Chains.png' },
  { name: 'EARRINGS', icon: 'https://www.krajewellers.com/shop/assets/uploads/product_images/20210805140316_sliderear.png' },
  { name: 'RINGS', icon: 'https://www.krajewellers.com/shop/assets/uploads/product_images/20220106115414_1_Ring.png' },
  { name: 'PENDANTS AND SETS', icon: 'https://www.krajewellers.com/shop/assets/uploads/product_images/20210805140543_slidepeda.png' },
  { name: 'BRACELETS & BANGLES', icon: 'https://www.krajewellers.com/shop/assets/uploads/product_images/20220715152504_slidebrac.png' },
  { name: 'NECKLACE', icon: 'https://www.krajewellers.com/shop/assets/uploads/product_images/20220106115646_7_Necklace.png' },
];


function JewelleryCategories() {
      const [selectedIndex, setSelectedIndex] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box textAlign="center" py={4} bgcolor="#f8f3eb" sx={{
        mt: { xs: 2}}} >
     <Typography
      variant={isMobile ? 'h6' : 'h5'}
      color="#00205b"
      sx={{
        mt: { xs: 1, sm: 2.5, md: 2 },
        mb: 5,
      }}
    >
        What jewellery are you looking for?
      </Typography>
      <Grid
        container
        justifyContent="center"
        sx={{
          backgroundColor: '#00205b',
          py: 8,
         
          borderRadius: '2px',
          overflow: 'hidden',
        }}
      >
        {categories.map((category, idx) => {
          const isSelected = idx === selectedIndex;
          return (
           <Grid
  item
  xs={6}
  sm={4}
  md={2}
  key={idx}
  onClick={() => setSelectedIndex(idx)}
  sx={{
    display: 'flex',
    justifyContent: 'center',
    cursor: 'pointer',
    backgroundColor: isSelected ? '#00205b' : '#00205b',
    transition: 'background-color 0.3s ease',
    py: 3,
    px: 8,
    borderRight: {
      xs: 'none',   // no border on mobile
      sm: 'none',   // no border on tablet
      md: idx !== categories.length - 1 ? '1px solid #e0c184' : 'none',  // border on desktop only
    },
  }}
>

              <Box display="flex" flexDirection="column" alignItems="center" px={1.5}>
                <Box
                  component="img"
                  src={category.icon}
                  alt={category.name}
                  sx={{ height: 50, mb: 1 }}
                />
                <Typography
                  color="white"
                  fontSize={12}
                  fontWeight="500"
                  textAlign="center"
                >
                  {category.name}
                </Typography>
              </Box>
            </Grid>
          );
        })}
      </Grid>
     <Button
  sx={{
    mt: 2,
    color: '#00205b',
    border: '1px solid #c89f5d',
    borderRadius: '25px',
    px: 3,
    fontWeight: 'bold',
    '&:hover': {
      backgroundColor: '#f3e6d1', // Optional: light background on hover
      borderColor: '#b98e50',
    },
  }}
>
  VIEW ALL PRODUCTS
</Button>

    </Box>
  );
}

export default JewelleryCategories;