import React from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardMedia,
} from '@mui/material';

// Image URLs
const leftImages = [
  {
    url: 'https://static.malabargoldanddiamonds.com/media/wysiwyg/offer_page/2023/06_June/homepage/gifting-block/Birthday.jpg',
    alt: 'Birthday'
  },
  {
    url: 'https://static.malabargoldanddiamonds.com/media/wysiwyg/offer_page/2023/06_June/homepage/gifting-block/anniversary.jpg',
    alt: 'Anniversary'
  },
  {
    url: 'https://static.malabargoldanddiamonds.com/media/wysiwyg/offer_page/2023/06_June/homepage/gifting-block/baby-birth.jpg',
    alt: 'Baby Birth'
  },
  {
    url: 'https://static.malabargoldanddiamonds.com/media/wysiwyg/offer_page/2023/06_June/homepage/gifting-block/festive.jpg',
    alt: 'Festive Collection'
  },
];

const rightImages = [
  {
    url: 'https://static.malabargoldanddiamonds.com/media/wysiwyg/offer_page/2023/06_June/homepage/gifting-block/Personalized.jpg',
    alt: 'Personalised Jewellery'
  },
  {
    url: 'https://static.malabargoldanddiamonds.com/media/wysiwyg/offer_page/2023/06_June/homepage/gifting-block/Customized.jpg',
    alt: 'Customized Jewellery'
  },
];

const GiftsAndMore = () => {
  return (
    <Box sx={{ py: 8, backgroundColor: '#fff7f3' }}>
      <Container maxWidth={false} sx={{ width: '80%' }}>
        <Typography variant="h4" align="center" gutterBottom>
          Gifts & More
        </Typography>
        <Typography variant="subtitle1" align="center" sx={{ mb: 4, color: '#555' }}>
          Thoughtful surprises and timeless treasures for every occasion
        </Typography>

        <Box sx={{ display: 'flex', gap: 4, flexWrap: 'wrap' }}>
          {/* Left Section */}
          <Box sx={{ display: 'flex', flex: 1, flexWrap: 'wrap', gap: 3 }}>
            {leftImages.map((img, idx) => (
              <Box key={idx} sx={{ flex: '1 1 calc(50% - 12px)' }}>
                <Card sx={{ borderRadius: 2, boxShadow: 'none', position: 'relative' }}>
                  <CardMedia
                    component="img"
                    image={img.url}
                    alt={img.alt}
                    sx={{ borderRadius: 2, width: '100%', height: 180, objectFit: 'cover' }}
                  />
                 
                </Card>
              </Box>
            ))}
          </Box>

          {/* Right Section */}
          <Box sx={{ display: 'flex', flex: 1, flexDirection: 'row', gap: 3 }}>
            {rightImages.map((img, idx) => (
              <Card key={idx} sx={{ borderRadius: 2, boxShadow: 'none', position: 'relative' }}>
                <CardMedia
                  component="img"
                  image={img.url}
                  alt={img.alt}
                  sx={{ borderRadius: 2, width: '100%', height: 400, objectFit: 'cover' }}
                />
              
              </Card>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default GiftsAndMore;
