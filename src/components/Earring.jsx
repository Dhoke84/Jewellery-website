import React from 'react';
import { Box, Grid, Typography, Container } from '@mui/material';

const earringItems = [
  {
    title: 'STUDS',
    subtitle: 'Collection',
    image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTOFpE6e5xIkuUZEDFMoijPDJg7VDw8N5dQ2BfPKwDpFAB5LBhmp9Vx0sQ4vYhyg7nK8XK9AM_emUrOMJXLpf0MWHbZ6VpTIYyEOoUhS6ufGoA7Ly2tFkLqk6hrcP-f-RacB0QpcIt8Aw&usqp=CAc',
    bgColor: '#fef1e8',
  },
  {
    title: 'Jhumkas',
    subtitle: 'Collection',
    image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSeYNO4m4tg67DwLxOklMws-w-5ycumn9Rc225XKva6OYSM-lDDkI8ZgtJuHMZpLzOTv1Thstenx33qDAQjBPUFQ4EAovVQSQgI8qN4v1mAoHUUqta2K0k9',
    bgColor: '#fff2e6',
  },
  {
    title: 'Drops',
    subtitle: 'Collection',
    image: 'https://static.malabargoldanddiamonds.com/media/wysiwyg/offer_page/2025/04_april/ind-homepage/akshaya-tritiya/earring-collection/Drops.jpg',
    bgColor: '#fdeef3',
  },
  {
    title: 'Hoops–Balis',
    subtitle: 'Collection',
    image: 'https://static.malabargoldanddiamonds.com/media/wysiwyg/offer_page/2025/04_april/ind-homepage/akshaya-tritiya/earring-collection/Hoops.jpg',
    bgColor: '#fff5dc',
  },
];

const EarringCollection = () => {
  return (
    <Box sx={{ py: 8, backgroundColor: '#f8f3eb' }}>
      <Container maxWidth="lg">
        {/* Heading */}
        <Box textAlign="center" mb={5}>
          <Typography variant="h4" sx={{ fontWeight: 600, mb: 1 , color: '#00205b' }}>
            Earring Collection
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            Our Exclusive Earring Collection
          </Typography>
        </Box>

        {/* Cards */}
        <Grid container spacing={3} justifyContent="center">
          {earringItems.map((item, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Box
                sx={{
                  backgroundColor: "#c89f5d",
                  borderRadius: 2,
                  boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                  px: 1.5,
                  py: 2,
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  height: '100%',
                  minHeight: 160,
                  maxWidth: 270, // limit card width
                  mx: 'auto', // center the card inside the column
                }}
              >
                <Box
                  component="img"
                  src={item.image}
                  alt={item.title}
                  sx={{ height: 90, objectFit: 'contain', ml: 1 }}
                />
                <Box textAlign="right" sx={{ mr: 1 }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                    {item.title}
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{ fontFamily: 'cursive', fontSize: '0.85rem' }}
                  >
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

export default EarringCollection;
