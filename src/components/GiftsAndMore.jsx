import React from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardMedia,
} from '@mui/material';

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
    <Box sx={{ py: 8, backgroundColor: '#fff7f3' , mt: { xs: -8, sm: -5, md: 0 }, }}>
      <Container maxWidth={false} sx={{ width: { xs: '95%', sm: '90%', md: '80%' } }}>
        <Typography variant="h4" align="center" gutterBottom>
          Gifts & More
        </Typography>
        <Typography variant="subtitle1" align="center" sx={{ mb: 4, color: '#555' }}>
          Thoughtful surprises and timeless treasures for every occasion
        </Typography>

        <Box
          sx={{
            display: 'flex',
            gap: 4,
            flexWrap: { xs: 'wrap', md: 'nowrap' }, // wrap on mobile/tablet, nowrap on desktop
          }}
        >
          {/* Left Section */}
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 3,
              flex: { xs: '1 1 100%', md: 1 },
            }}
          >
            {leftImages.map((img, idx) => (
              <Box
                key={idx}
                sx={{
                  flex: { xs: '1 1 100%', sm: '1 1 calc(50% - 12px)' },
                  minWidth: 0,
                }}
              >
                <Card sx={{ borderRadius: 2, boxShadow: 'none', position: 'relative' }}>
                  <CardMedia
                    component="img"
                    image={img.url}
                    alt={img.alt}
                    sx={{
                      borderRadius: 2,
                      width: '100%',
                      height: { xs: 140, sm: 160, md: 180 },
                      objectFit: 'cover',
                    }}
                  />
                </Card>
              </Box>
            ))}
          </Box>

          {/* Right Section */}
         {/* Right Section */}
<Box
  sx={{
    display: 'flex',
    flexDirection: {
      xs: 'column',   // mobile: column
      sm: 'column',   // tablet: column
      md: 'row',   // desktop & laptop: column (unchanged)
    },
    gap: 3,
    flex: { xs: '1 1 100%', md: 1 },
    overflowX: {
      xs: 'visible',   // no scroll on mobile
      sm: 'visible',   // no scroll on tablet
      md: 'visible',   // desktop/laptop no scroll
    },
    pb: { xs: 2, md: 0 },
  }}
>
  {rightImages.map((img, idx) => (
    <Card
      key={idx}
      sx={{
        borderRadius: 2,
        boxShadow: 'none',
        position: 'relative',
        width: {
          xs: '100%',  // mobile full width
          sm: '100%',  // tablet full width
          md: 250,     // desktop/laptop fixed width (same as before)
        },
        flexShrink: 0,
      }}
    >
      <CardMedia
        component="img"
        image={img.url}
        alt={img.alt}
        sx={{
          borderRadius: 2,
          width: '100%',
          height: {
            xs: 370,  // mobile height
            sm: 800,  // tablet height increased as requested
            md: 400,  // desktop/laptop height
          },
          objectFit: 'cover',
        }}
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
