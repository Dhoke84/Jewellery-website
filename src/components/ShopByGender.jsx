import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Tabs,
  Tab,
  Grid,
  Card,
  CardMedia,
  CardContent,
} from '@mui/material';

const categories = {
    
  
  women: [
    {
      title: 'Gold Ring',
      image: 'https://static.malabargoldanddiamonds.com/media/wysiwyg/offer_page/2023/06_June/homepage/shop-by-gender/w/Gold-Ring.jpg',
    },
    {
      title: 'Gold Earring',
      image: 'https://static.malabargoldanddiamonds.com/media/wysiwyg/offer_page/2023/06_June/homepage/shop-by-gender/w/Gold-Earring.jpg',
    },
    {
      title: 'Gold Pendant',
      image: 'https://static.malabargoldanddiamonds.com/media/wysiwyg/offer_page/2023/06_June/homepage/shop-by-gender/w/Gold-Pendant.jpg',
    },
    {
      title: 'Gold Chain',
      image: 'https://static.malabargoldanddiamonds.com/media/wysiwyg/offer_page/2023/06_June/homepage/shop-by-gender/w/Gold-Chain.jpg',
    },
  ],
  men: [
    {
      title: 'Gold Kada',
      image: 'https://static.malabargoldanddiamonds.com/media/wysiwyg/offer_page/2023/06_June/homepage/shop-by-gender/m/Gold--kada.jpg',
    },
    {
      title: 'Gold Chain',
      image: 'https://static.malabargoldanddiamonds.com/media/wysiwyg/offer_page/2023/06_June/homepage/shop-by-gender/m/Gold-Chain_1.jpg',
    },
    {
      title: 'Gold Ring',
      image: 'https://static.malabargoldanddiamonds.com/media/wysiwyg/offer_page/2023/06_June/homepage/shop-by-gender/m/Gold-Ring.jpg',
    },
    {
      title: 'Gold Pendant',
      image: 'https://static.malabargoldanddiamonds.com/media/wysiwyg/offer_page/2023/06_June/homepage/shop-by-gender/m/Gold-Pendant.jpg',
    },
  ],
  kids: [
    {
      title: 'Gold Ring',
      image: 'https://static.malabargoldanddiamonds.com/media/wysiwyg/offer_page/2023/06_June/homepage/shop-by-gender/k/Gold-ring.jpg',
    },
    {
      title: 'Gold Earring',
      image: 'https://static.malabargoldanddiamonds.com/media/wysiwyg/offer_page/2023/06_June/homepage/shop-by-gender/k/Gold-Earring.jpg',
    },
    {
      title: 'Little Pendant',
      image: 'https://static.malabargoldanddiamonds.com/media/wysiwyg/offer_page/2023/06_June/homepage/shop-by-gender/k/Gold-Pendant.jpg',
    },
    {
      title: 'Mini Bracelet',
      image: 'https://static.malabargoldanddiamonds.com/media/wysiwyg/offer_page/2023/06_June/homepage/shop-by-gender/k/Gold-Bracelet.jpg',
    },
  ],
};

const ShopByGender = () => {
  const [tab, setTab] = useState('women');

return (
  <Box sx={{ py: 8, backgroundColor: '#fefbf9' }}>
    <Container maxWidth={false} sx={{ width: '100%' }}> {/* 80% width as requested earlier */}
      {/* Heading */}
      <Typography variant="h4" align="center" gutterBottom>
        Shop By Gender
      </Typography>

      {/* Tabs */}
      <Tabs
        value={tab}
        onChange={(e, newValue) => setTab(newValue)}
        centered
        textColor="secondary"
        indicatorColor="secondary"
        sx={{
          mb: 4,
          '& .MuiTab-root': { fontWeight: 500, fontSize: '1rem', textTransform: 'none' },
          '& .Mui-selected': { color: '#a51263 !important' },
          '& .MuiTabs-indicator': { backgroundColor: '#a51263' },
        }}
      >
        <Tab label="Women's Jewellery" value="women" />
        <Tab label="Men's Jewellery" value="men" />
        <Tab label="Kids Jewellery" value="kids" />
      </Tabs>

      {/* Product Grid */}
      <Grid container spacing={3} justifyContent="center">
        {categories[tab].map((item, idx) => (
          <Grid item xs={12} sm={6} md={6} key={idx} display="flex" justifyContent="center">
            <Card
              sx={{
                borderRadius: 2,
                boxShadow: 'none',
                textAlign: 'center',
                backgroundColor: 'transparent',
                maxWidth: 400,
              }}
            >
              <CardMedia
                component="img"
                image={item.image}
                alt={item.title}
                sx={{
                  borderRadius: 2,
                  height: 300,
                  objectFit: 'cover',
                  width: '100%',
                }}
              />
              {/* Uncomment below if you want titles */}
              {/* <CardContent>
                <Typography variant="subtitle1" sx={{ fontWeight: 500, color: '#4a3c2c' }}>
                  {item.title}
                </Typography>
              </CardContent> */}
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  </Box>
);


};

export default ShopByGender;
