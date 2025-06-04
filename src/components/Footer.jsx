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
    <Box sx={{ backgroundColor: '#c89f5d', color: '#fff', pt: 6, pb: 3 }}>
      <Container maxWidth={false} sx={{ width: '80%' }}>
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
            <Typography variant="body1" sx={{ color: '#00205b' , mt: 1 , fontWeight: 'bold'}}>
              We craft timeless jewellery and meaningful gifts for all occasions. Discover the beauty of tradition blended with modern elegance.
            </Typography>
          </Box>

          {/* Right Section - Contact */}
          <Box sx={{ flex: 1 , color: '#00205b' }}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight:'bold', color: '#00205b' }}>
              Contact Us
            </Typography>
<Box sx={{ display: 'flex', alignItems: 'center', mb: 1 , flexDirection: 'row',}}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <EmailIcon sx={{ mr: 1, fontWeight:'bold', color: '#00205b' }} />
              <Typography variant="body2">support@example.com</Typography>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <PhoneIcon sx={{ mr: 1, fontWeight:'bold', color: '#00205b' }} />
              <Typography variant="body2">+1 (234) 567-890</Typography>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <LocationOnIcon sx={{ mr: 1, fontWeight:'bold', color: '#00205b' }} />
              <Typography variant="body2">123 Gold Street, NYC, USA</Typography>
            </Box>
            </Box>

            {/* Social Media Icons */}
           
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
          <Typography variant="body2" sx={{ fontWeight:'bold', color: '#00205b' }}>
            © {new Date().getFullYear()} Your Brand Name. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
