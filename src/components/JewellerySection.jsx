import React from 'react';
import { Box, Grid, Typography, Container } from '@mui/material';

const jewelryItems = [
  {
    title: 'Sleek Necklaces',
    subtitle: 'Explore the collection',
    image: 'https://i.ebayimg.com/images/g/0LgAAOSwe3JniMwY/s-l400.jpg',
  },
  {
    title: 'Elegant Bangles',
    subtitle: 'Starting from ₹36,200*',
    image: 'https://tribalornaments.com/cdn/shop/products/il_fullxfull.1984012697_l2tb.jpg?v=1616690030&width=1100',
  },
  {
    title: 'Stunning Pendants',
    subtitle: 'Starting from ₹10,817*',
    image: 'https://m.media-amazon.com/images/I/81dzYTTMznS._AC_SY695_.jpg',
  },
  {
    title: 'Stylish Bracelets',
    subtitle: 'Starting from ₹36,500*',
    image: 'https://marchjewellery.com/cdn/shop/files/MKBR170SSZN_m1_600x600_crop_center.jpg?v=1706168484',
  },
   {
    title: 'Stunning Pendants',
    subtitle: 'Starting from ₹10,817*',
    image: 'https://m.media-amazon.com/images/I/81dzYTTMznS._AC_SY695_.jpg',
  },
  {
    title: 'Stylish Bracelets',
    subtitle: 'Starting from ₹36,500*',
    image: 'https://marchjewellery.com/cdn/shop/files/MKBR170SSZN_m1_600x600_crop_center.jpg?v=1706168484',
  },
];

const JewelryShowcase = () => {
  return (
    <Box sx={{ py: 6 }}>
      <Container maxWidth="lg">
        {/* Headings */}
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 1 }}>
            Discover Our Jewelry Collection
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            Handpicked pieces designed to bring elegance and sparkle to every occasion.
          </Typography>
        </Box>

        {/* Grid */}
        <Grid container spacing={4} justifyContent="space-between">
          {jewelryItems.map((item, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
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
                }}
              >
                <Box
                  component="img"
                  src={item.image}
                  alt={item.title}
                  sx={{
                    width: '100%',
                    height: 300,
                    objectFit: 'cover',
                  }}
                />
                <Box sx={{ p: 3 }}>
                  <Typography variant="h6" gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.subtitle}
                  </Typography>
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
