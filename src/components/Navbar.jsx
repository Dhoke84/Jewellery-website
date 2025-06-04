import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  Button,
  Menu,
  MenuItem,
  Divider,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import HomeIcon from '@mui/icons-material/Home';
import StoreIcon from '@mui/icons-material/Store';
import LoginIcon from '@mui/icons-material/Login';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleOpen = (e) => setAnchorEl(e.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const updatedAt = new Date().toLocaleString('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });

  const rateData = [
    { title: 'Gold 24 KT', subtitle: '(*Online Store)', rate: '₹ 9951.73 per gm' },
    { title: 'Gold 24 KT', subtitle: '(*Offline Store)', rate: '₹ 9756.60 per gm' },
    { title: 'Gold 22 KT', rate: '₹ 8983.80 per gm' },
    { title: 'Gold 18 KT', rate: '₹ 7728.00 per gm' },
    { title: 'Pure Silver', rate: '₹ 100.80 per gm' },
  ];

  return (
    <AppBar position="static" sx={{ backgroundColor: '#c89f5d', boxShadow: 'none', borderBottom: '1px solid #ccc' }}>
      <Toolbar
        sx={{
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          px: { xs: 2, sm: 4, md: 8, lg: 12 },
          py: 1,
        }}
      >
        {/* Left Side: Contact and Rate Dropdown */}
        <Box display="flex" alignItems="center" gap={2} flexWrap="wrap">
          <Box display="flex" alignItems="center">
            <PhoneIcon sx={{ mr: 1, color: 'navy' }} />
            <Typography fontSize={{ xs: 14, sm: 16 }} color="white">
            +1 (234) 567-890
            </Typography>
          </Box>

          <Button
            onClick={handleOpen}
            sx={{
              backgroundColor: open ? '#00205b' : '#debe77',
              color: open ? '#fff' : '#5f4400',
              px: 2,
              py: 0.5,
              fontSize: 14,
              textTransform: 'none',
              '&:hover': {
                backgroundColor: open ? '#00205b' : '#d1ad63',
              },
            }}
            endIcon={<ArrowDropDownIcon />}
          >
            Rate
          </Button>

          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
            transformOrigin={{ vertical: 'top', horizontal: 'left' }}
            PaperProps={{
              sx: {
                backgroundColor: '#d0a858',
                color: '#fff',
                border: '1px solid #d9b87d',
                boxShadow: 2,
                minWidth: 260,
              },
            }}
            MenuListProps={{ disablePadding: true }}
          >
            {rateData.map((item, i) => (
              <MenuItem
                key={i}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  px: 2,
                  py: 1.5,
                  color: '#fff',
                  '&:hover': {
                    backgroundColor: '#bb9247',
                  },
                }}
              >
                <Typography fontSize={14} fontWeight="bold">
                  {item.title}
                </Typography>
                {item.subtitle && (
                  <Typography fontSize={12}>{item.subtitle}</Typography>
                )}
                <Typography fontSize={14} fontWeight="medium">
                  {item.rate}
                </Typography>
              </MenuItem>
            ))}
            <Divider sx={{ backgroundColor: '#fff', my: 1 }} />
            <Box px={2} pb={2}>
              <Typography fontSize={13} fontWeight="bold">Updated On:</Typography>
              <Typography fontSize={13}>{updatedAt}</Typography>
            </Box>
          </Menu>
        </Box>

        {/* Right Side: Navigation Buttons */}
        <Box display="flex" alignItems="center" gap={1} flexWrap="wrap" mt={{ xs: 1, sm: 0 }}>
          <Button
            startIcon={<HomeIcon sx={{ color: '#00205b' }} />}
            sx={{ fontSize: 14, color: 'white' }}
          >
            Corporate Website
          </Button>
          <Button
            startIcon={<StoreIcon sx={{ color: '#00205b' }} />}
            sx={{ fontSize: 14, color: 'white' }}
          >
            Shop
          </Button>
          <Button
            startIcon={<LoginIcon sx={{ color: '#00205b' }} />}
            sx={{ fontSize: 14, color: 'white' }}
          >
            Sign In
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
