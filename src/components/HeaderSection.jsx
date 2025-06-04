import React, { useState } from 'react';
import {
  Box,
  InputBase,
  Button,
  Paper,
  Toolbar,
  useTheme,
  useMediaQuery,
  Badge,
  IconButton,
  Collapse,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CloseIcon from '@mui/icons-material/Close';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

function HeaderSection() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const { cartItems } = useCart();
  const navigate = useNavigate();

  const handleToggleSearch = () => setShowMobileSearch((prev) => !prev);

  return (
    <Box
      sx={{
        position: 'fixed',
        top: { xs: 50, sm: 60 },
        left: 0,
        width: '100%',
        backgroundColor: '#fff',
        zIndex: theme.zIndex.appBar + 1,
        borderBottom: '1px solid #ddd',
      }}
    >
      <Toolbar
        sx={{
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          px: { xs: 2, sm: 4, md: 8, lg: 12 },
          py: 2,
        }}
      >
        {/* Logo */}
        <Box
          component="img"
          src="./images/logo.png"
          alt="KRA Logo"
          sx={{
            height: { xs: 50, sm: 80, md: 100 },
            width: 'auto',
          }}
        />

        {/* Mobile */}
        {isMobile ? (
          <Box display="flex" alignItems="center" gap={1}>
            <IconButton onClick={handleToggleSearch}>
              {showMobileSearch ? <CloseIcon /> : <SearchIcon />}
            </IconButton>

            <IconButton onClick={() => navigate('/cart')}>
              <Badge
                badgeContent={cartItems.length}
                sx={{
                  '& .MuiBadge-badge': {
                    backgroundColor: '#00205b',
                    color: '#fff',
                    fontSize: 11,
                    height: 18,
                    minWidth: 18,
                    top: 4,
                    right: 4,
                  },
                }}
              >
                <ShoppingCartIcon sx={{ color: '#00205b' }} />
              </Badge>
            </IconButton>
          </Box>
        ) : (
          <>
            {/* Desktop Search */}
            <Paper
              component="form"
              sx={{
                display: 'flex',
                alignItems: 'center',
                flexGrow: 1,
                maxWidth: 800,
                mx: 4,
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
                  backgroundColor: '#00205b',
                  color: '#fff',
                  px: 3,
                  height: '100%',
                  borderRadius: 0,
                  fontWeight: 'bold',
                  '&:hover': {
                    backgroundColor: '#00205b',
                  },
                }}
                startIcon={<SearchIcon />}
              >
                SEARCH
              </Button>
            </Paper>

            {/* Desktop Cart */}
            <Button
              variant="outlined"
              onClick={() => navigate('/cart')}
              sx={{
                borderColor: '#00205b',
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
                badgeContent={cartItems.length}
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
                <ShoppingCartIcon sx={{ color: '#00205b' }} />
              </Badge>
            </Button>
          </>
        )}
      </Toolbar>

      {/* Mobile Search Collapse */}
      {isMobile && (
        <Collapse in={showMobileSearch}>
          <Box sx={{ px: 2, pb: 2 }}>
            <Paper
              component="form"
              sx={{
                display: 'flex',
                alignItems: 'center',
                borderRadius: 10,
                overflow: 'hidden',
                boxShadow: 'none',
                border: '1px solid #ddd',
                height: 44,
              }}
            >
              <InputBase
                sx={{ ml: 2, flex: 1 }}
                placeholder="Search for Jewellery"
              />
              <IconButton
                type="submit"
                sx={{ backgroundColor: '#00205b', color: '#fff', borderRadius: 0 }}
              >
                <SearchIcon />
              </IconButton>
            </Paper>
          </Box>
        </Collapse>
      )}
    </Box>
  );
}

export default HeaderSection;
