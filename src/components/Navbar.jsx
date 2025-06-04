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
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import HomeIcon from '@mui/icons-material/Home';
import StoreIcon from '@mui/icons-material/Store';
import LoginIcon from '@mui/icons-material/Login';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import MenuIcon from '@mui/icons-material/Menu';

function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleOpen = (e) => setAnchorEl(e.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const [drawerOpen, setDrawerOpen] = useState(false);
  const toggleDrawer = (open) => () => setDrawerOpen(open);

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
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: '#00205b',
          color: 'white',
          boxShadow: 'none',
          borderBottom: '1px solid #ccc',
          zIndex: theme.zIndex.drawer + 1,
        }}
      >
        <Toolbar
          sx={{
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            px: { xs: 2, sm: 4, md: 8, lg: 12 },
            py: 1,
          }}
        >
          {/* Left Side: Contact and (non-mobile) Rate Dropdown */}
          <Box display="flex" alignItems="center" gap={2} flexWrap="wrap">
            <Box display="flex" alignItems="center">
              <PhoneIcon sx={{ mr: 1, color: 'white' }} />
              <Typography fontSize={{ xs: 14, sm: 16 }} color="white">
                +1 (234) 567-890
              </Typography>
            </Box>

            {!isMobile && (
              <>
                <Button
  onClick={handleOpen}
  sx={{
    backgroundColor: '#00205b',
    color: '#fff',
    px: 2,
    py: 0.5,
    fontSize: 14,
    textTransform: 'none',
    '&:hover': {
      backgroundColor: '#fff',
      color: '#00205b',
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
                      backgroundColor: 'white',
                      color: '#00205b',
                      border: '1px solid white',
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
                        color: '#00205b',
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
              </>
            )}
          </Box>

          {/* Right Side: Navigation or Drawer */}
          {isMobile ? (
            <>
              <IconButton onClick={toggleDrawer(true)} sx={{ color: 'white' }}>
                <MenuIcon />
              </IconButton>
              <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
                <Box
                  sx={{ width: 250, mt: 8 }}
                  role="presentation"
                  onClick={toggleDrawer(false)}
                  onKeyDown={toggleDrawer(false)}
                >
                  <List>
                    <ListItem button>
                      <ListItemIcon><HomeIcon /></ListItemIcon>
                      <ListItemText primary="Corporate Website" />
                    </ListItem>
                    <ListItem button>
                      <ListItemIcon><StoreIcon /></ListItemIcon>
                      <ListItemText primary="Shop" />
                    </ListItem>
                    <ListItem button>
                      <ListItemIcon><LoginIcon /></ListItemIcon>
                      <ListItemText primary="Sign In" />
                    </ListItem>
                  </List>
                </Box>
              </Drawer>
            </>
          ) : (
            <Box display="flex" alignItems="center" gap={1} flexWrap="wrap" mt={{ xs: 1, sm: 0 }}>
              <Button
                startIcon={<HomeIcon sx={{ color: 'white' }} />}
                sx={{ fontSize: 14, color: 'white' }}
              >
                Corporate Website
              </Button>
              <Button
                startIcon={<StoreIcon sx={{ color: 'white' }} />}
                sx={{ fontSize: 14, color: 'white' }}
              >
                Shop
              </Button>
              <Button
                startIcon={<LoginIcon sx={{ color: 'white' }} />}
                sx={{ fontSize: 14, color: 'white' }}
              >
                Sign In
              </Button>
            </Box>
          )}
        </Toolbar>
      </AppBar>

      {/* Spacer to prevent content from hiding under fixed navbar */}
      <Toolbar sx={{ mb: 2 }} />
    </>
  );
}

export default Navbar;
