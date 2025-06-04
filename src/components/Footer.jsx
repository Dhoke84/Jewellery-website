import React from 'react';
import {
  Box,
  Container,
  Typography,
  IconButton,
} from '@mui/material';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#f3e6d1', color: '#fff', pt: 6, pb: 3 }}>
      <Container maxWidth={false} sx={{ width: { xs: '95%', sm: '90%', md: '80%' } }}>
        {/* Main Flex Container */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            gap: 4,
          }}
        >
          {/* Left Section */}
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="body1"
              sx={{
                color: '#00205b',
                mt: 1,
                fontWeight: 'bold',
                textAlign: { xs: 'center', md: 'left' }, // center text on mobile
              }}
            >
              We craft timeless jewellery and meaningful gifts for all occasions. Discover the beauty of tradition blended with modern elegance.
            </Typography>
          </Box>

          {/* Right Section - Contact */}
          <Box sx={{ flex: 1, color: '#00205b' }}>
            <Typography
              variant="h6"
              gutterBottom
              sx={{
                fontWeight: 'bold',
                color: '#00205b',
                textAlign: { xs: 'center', md: 'left' }, // center heading on mobile
              }}
            >
              Contact Us
            </Typography>

            {/* Contact Items */}
           <Box
  sx={{
    display: 'flex',
    flexDirection: { xs: 'column', sm: 'column', md: 'row' },  // column on mobile & tablet, row on desktop
    alignItems: { xs: 'center', md: 'flex-start' },           // center on mobile/tablet, flex-start on desktop
    gap: 1.5,
  }}
>
  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
    <EmailIcon sx={{ color: '#00205b' }} />
    <Typography variant="body2">support@example.com</Typography>
  </Box>

  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
    <PhoneIcon sx={{ color: '#00205b' }} />
    <Typography variant="body2">+1 (234) 567-890</Typography>
  </Box>

  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
    <LocationOnIcon sx={{ color: '#00205b' }} />
    <Typography variant="body2">123 Gold Street, NYC, USA</Typography>
  </Box>
</Box>


            {/* Social Media Icons (if needed) */}
            {/* Example:
            <Box sx={{ mt: 3, display: 'flex', justifyContent: { xs: 'center', md: 'flex-start' }, gap: 2 }}>
              <IconButton sx={{ color: '#00205b' }}>
                <YouTubeIcon />
              </IconButton>
              <IconButton sx={{ color: '#00205b' }}>
                <InstagramIcon />
              </IconButton>
            </Box>
            */}
          </Box>
        </Box>

        {/* Bottom Line */}
        <Box
          sx={{
            borderTop: '1px solid #333',
            mt: 4,
            pt: 2,
            textAlign: 'center',
          }}
        >
          <Typography variant="body2" sx={{ fontWeight: 'bold', color: '#00205b' }}>
            © {new Date().getFullYear()} Your Brand Name. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
