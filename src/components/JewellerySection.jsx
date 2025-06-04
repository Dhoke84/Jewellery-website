import React from 'react';
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
    image: 'https://i.ebayimg.com/images/g/0LgAAOSwe3JniMwY/s-l400.jpg',
      price: 3200,
  },
  {
    title: 'Elegant Bangles',
    subtitle: 'Starting from ₹4,000*',
    image:
      'https://tribalornaments.com/cdn/shop/products/il_fullxfull.1984012697_l2tb.jpg?v=1616690030&width=1100',
      price: 4000,
  },
  {
    title: 'Stunning Pendants',
    subtitle: 'Starting from ₹10,817*',
    image: 'https://m.media-amazon.com/images/I/81dzYTTMznS._AC_SY695_.jpg',
    price: 10817,
  },
  {
    title: 'Stylish Bracelets',
    subtitle: 'Starting from ₹6,500*',
    image:
      'https://marchjewellery.com/cdn/shop/files/MKBR170SSZN_m1_600x600_crop_center.jpg?v=1706168484',
    price: 6500,
  },
  
];

const JewelryShowcase = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  
  const { addToCart } = useCart();

  return (
    <Box sx={{ py: 6 ,   
        mt: { xs: 8, sm: 14, md: 17 }}}>
      <Container maxWidth="lg">
        {/* Headings */}
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

        {/* Grid */}
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
                <Box
                  component="img"
                  src={item.image}
                  alt={item.title}
                  sx={{
                    width: '100%',
                    height: { xs: 300, sm: 250, md: 250 },
                    objectFit: 'cover',
                  }}
                />
          <Box sx={{ p: 3 }}>
  <Typography variant="h6" gutterBottom>
    {item.title}
  </Typography>
  <Typography variant="body2" color="text.secondary" gutterBottom>
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
