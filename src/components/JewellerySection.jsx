import React, { useState, useEffect } from 'react';
import {
  Box,
  Grid,
  Typography,
  Container,
  useTheme,
  useMediaQuery,
  Button,
} from '@mui/material';
import { useCart } from '../context/CartContext';

const jewelryItems = [
  {
    title: 'Sleek Necklaces',
    subtitle: 'Starting from ₹3,200*',
    images: [
      'https://i.ebayimg.com/images/g/0LgAAOSwe3JniMwY/s-l400.jpg',
      'https://i.ebayimg.com/images/g/m0UAAOSwVmZniMwX/s-l1600.webp',
      'https://i.ebayimg.com/images/g/taoAAOSwCUpniMxJ/s-l1600.webp',
      'https://i.ebayimg.com/images/g/WXkAAOSwErVniMwX/s-l1600.webp',
    ],
    price: 3200,
  },
  {
    title: 'Elegant Bangles',
    subtitle: 'Starting from ₹4,000*',
    images: [
      'https://mayro.in/cdn/shop/files/FRE09248_medium.jpg?v=1726464665',
      'https://mayro.in/cdn/shop/files/FRE09228.jpg?v=1726464665',
      'https://mayro.in/cdn/shop/files/FRE09230.jpg?v=1726464665',
      'https://mayro.in/cdn/shop/files/FRE09252.jpg?v=1726464665',
    ],
    price: 4000,
  },
  {
    title: 'Stunning Pendants',
    subtitle: 'Starting from ₹10,817*',
    images: [
      'https://beautynx.com/cdn/shop/files/222_24_800x.jpg?v=1725941365',
      'https://beautynx.com/cdn/shop/files/222_19_800x.jpg?v=1725941370',
      'https://beautynx.com/cdn/shop/files/222_21_1800x1800.jpg?v=1725941375',
      'https://beautynx.com/cdn/shop/files/222_22_800x.jpg?v=1725941377',
    ],
    price: 10817,
  },
  {
    title: 'Stylish Bracelets',
    subtitle: 'Starting from ₹6,500*',
    images: [
      'https://marchjewellery.com/cdn/shop/files/MKBR170SSZN_m1_600x600_crop_center.jpg?v=1706168484',
      'https://marchjewellery.com/cdn/shop/products/MKBR170SSZN_1_800x.jpg?v=1706168484',
      'https://marchjewellery.com/cdn/shop/products/MKBR170SSZN_2_800x.jpg?v=1706168484',
      'https://marchjewellery.com/cdn/shop/files/silvercarecard-03_05814098-f015-4b89-8a81-31d9b0d4f921_800x.png?v=1706168484',
    ],
    price: 6500,
  },
];

const JewelryShowcase = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const { addToCart } = useCart();

  const [imageIndices, setImageIndices] = useState(
    jewelryItems.map(() => 0)
  );

  // Auto-scroll every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndices((prev) =>
        prev.map((currentIndex, i) => {
          const item = jewelryItems[i];
          return (currentIndex + 1) % item.images.length;
        })
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (itemIndex, imageIndex) => {
    setImageIndices((prev) => {
      const newIndices = [...prev];
      newIndices[itemIndex] = imageIndex;
      return newIndices;
    });
  };

  return (
    <Box sx={{ py: 6, mt: { xs: 8, sm: 14, md: 17 } }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography
            variant={isMobile ? 'h5' : 'h4'}
            sx={{ fontWeight: 'bold', mb: 1 }}
          >
            Discover Our Jewellery Collection
          </Typography>
          <Typography
            variant={isMobile ? 'body2' : 'subtitle1'}
            color="text.secondary"
          >
            Handpicked pieces designed to bring elegance and sparkle to every
            occasion.
          </Typography>
        </Box>

        <Grid container spacing={4} justifyContent="center">
          {jewelryItems.map((item, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              key={index}
              sx={{ display: 'flex', justifyContent: 'center' }}
            >
              <Box
                sx={{
                  borderRadius: 3,
                  overflow: 'hidden',
                  boxShadow: 4,
                  textAlign: 'center',
                  bgcolor: '#fff',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  width: '100%',
                  maxWidth: { xs: 340, sm: 400 },
                }}
              >
                {/* Image */}
                <Box>
                  <Box
                    component="img"
                    src={item.images[imageIndices[index]]}
                    alt={item.title}
                    sx={{
                      width: '100%',
                      height: { xs: 300, sm: 250, md: 250 },
                      objectFit: 'cover',
                      transition: '0.3s ease-in-out',
                    }}
                  />
                </Box>

                {/* Dots */}
                <Box
                  sx={{
                    mt: 1,
                    mb: 1,
                    display: 'flex',
                    justifyContent: 'center',
                    gap: 1,
                  }}
                >
                  {item.images.map((_, imgIdx) => (
                    <Box
                      key={imgIdx}
                      onClick={() => handleDotClick(index, imgIdx)}
                      sx={{
                        width: 6,
                        height: 6,
                        borderRadius: '50%',
                        backgroundColor:
                          imageIndices[index] === imgIdx ? '#001F54' : '#ccc',
                        cursor: 'pointer',
                        transition: '0.2s ease',
                      }}
                    />
                  ))}
                </Box>

                {/* Text & Button */}
                <Box sx={{ p: 3 }}>
                  <Typography variant="h6" gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    gutterBottom
                  >
                    {item.subtitle}
                  </Typography>
                  <Button
                    onClick={() => addToCart(item)}
                    variant="outlined"
                    size="medium"
                    sx={{
                      mt: 1,
                      borderColor: '#001F54',
                      color: '#001F54',
                      backgroundColor: '#fff',
                      borderRadius: 2,
                      '&:hover': {
                        backgroundColor: '#001F54',
                        color: '#fff',
                      },
                    }}
                  >
                    Add to Cart
                  </Button>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default JewelryShowcase;
