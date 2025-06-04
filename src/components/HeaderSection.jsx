import React from 'react';
import {
  Box,
  InputBase,
  Button,
  Paper,
  Toolbar,
  useTheme,
  useMediaQuery,
  Badge,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function HeaderSection() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Toolbar
      sx={{
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        px: {
          xs: 2,
          sm: 4,
          md: 8,
          lg: 12,
        },
        py: 3,
        backgroundColor: '#fff',
        width: '100%',
        boxSizing: 'border-box',
      }}
    >
      {/* Logo */}
      <Box
        component="img"
        src="./images/logo.png"
        alt="KRA Logo"
        sx={{
          height: { xs: 60, sm: 80, md: 100 },
          width: 'auto',
        }}
      />

      {/* Search Bar */}
      <Paper
        component="form"
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexGrow: 1,
          maxWidth: 800,
          mx: { xs: 0, sm: 4 },
          my: { xs: 2, sm: 0 },
          borderRadius: 10,
          overflow: 'hidden',
          boxShadow: 'none',
          border: '1px solid #ddd',
          height: 48,
        }}
      >
        <InputBase
          sx={{ ml: 2, flex: 1 }}
          placeholder="Search for Jewellery"
          inputProps={{ 'aria-label': 'search jewellery' }}
        />
        <Button
          type="submit"
          sx={{
            backgroundColor: '#c89f5d',
            color: '#fff',
            px: 3,
            height: '100%',
            borderRadius: 0,
            fontWeight: 'bold',
            '&:hover': {
              backgroundColor: '#b98e50',
            },
          }}
          startIcon={<SearchIcon />}
        >
          SEARCH
        </Button>
      </Paper>

      {/* Cart Button */}
      <Button
        variant="outlined"
        sx={{
          borderColor: '#c89f5d',
          color: '#00205b',
          borderRadius: '25px',
          px: 3,
          height: 48,
          fontWeight: 'bold',
          display: 'flex',
          alignItems: 'center',
          gap: 1,
        }}
      >
        CART
        <Badge
          badgeContent={0}
          sx={{
            '& .MuiBadge-badge': {
              backgroundColor: '#00205b',
              color: '#fff',
              fontSize: 11,
              height: 18,
              minWidth: 18,
              top: -5,
              right: -10,
            },
          }}
        >
          <ShoppingCartIcon sx={{ color: '#c89f5d' }} />
        </Badge>
      </Button>
    </Toolbar>
  );
}

export default HeaderSection;
