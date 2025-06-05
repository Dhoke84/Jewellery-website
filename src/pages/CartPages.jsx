import React from 'react';
import { useCart } from '../context/CartContext';
import {
  Box,
  Typography,
  Container,
  List,
  ListItem,
  Button,
  Divider,
} from '@mui/material';
import { Link } from 'react-router-dom';

const CartPage = () => {
  const { cartItems } = useCart();

  // Calculate subtotal
  const subtotal = cartItems.reduce((sum, item) => {
    const price = item.price ?? 0;
    const quantity = item.quantity ?? 1;
    return sum + price * quantity;
  }, 0);

  const extraCharges = 5.0;
  const finalTotal = subtotal + extraCharges;

  return (
<Container sx={{ mt: { xs: 10, sm: 18 } }}>

      {/* <Typography variant="h4" gutterBottom align="center">
        Cart
      </Typography> */}

      {cartItems.length === 0 ? (
        <Typography align="center">No items in the cart.</Typography>
      ) : (
        <>
          {/* Table Headers */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 2,
              borderBottom: '2px solid #000',
              py: 1,

              fontWeight: 'bold',
              textAlign: 'center',
            }}
          >
           <Box sx={{ flex: { xs: 0.8, sm: 1.2 }, pl: { xs: 2, sm: 5 } }}>Item</Box>
            <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center' }}>Price</Box>
            <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center' }}>Quantity</Box>
            <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center' }}>Total</Box>
          </Box>

          {/* Cart Items */}
          <List>
            {cartItems.map((item, index) => {
              const price = item.price ?? 0;
              const quantity = item.quantity ?? 1;
              const total = price * quantity;

              return (
                <ListItem
                  key={index}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                    borderBottom: '1px solid #ddd',
                    py: 2,
                  }}
                >
                  <Box sx={{ flex: 1.5, display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Box
                      component="img"
                     src={item.images ? item.images[0] : item.image}
                      alt={item.title}
                      width={80}
                      height={80}
                    />
                    <Box>
                      <Typography variant="subtitle1">{item.title}</Typography>
                      <Typography variant="body2">{item.subtitle}</Typography>
                    </Box>
                  </Box>

                  <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center' , }}>
                    <Typography>₹{price}</Typography>
                  </Box>

                  <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
                    <Typography>{quantity}</Typography>
                  </Box>

                  <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
                    <Typography fontWeight="bold">₹{total}</Typography>
                  </Box>
                </ListItem>
              );
            })}
          </List>

          {/* Summary Section */}
          <Divider sx={{ my: 4 }} />

          <Box sx={{ width: '100%', mb: 4 }}>
            <Typography variant="h6" gutterBottom>
              Order Summary
            </Typography>

            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
              <Typography>Subtotal</Typography>
              <Typography>₹{subtotal.toFixed(2)}</Typography>
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
              <Typography>Extra Charges</Typography>
              <Typography>₹{extraCharges.toFixed(2)}</Typography>
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
              <Typography variant="h6">Total</Typography>
              <Typography variant="h6">₹{finalTotal.toFixed(2)}</Typography>
            </Box>

             {/* Button Group */}
            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                gap: 2,
              }}
            >
              <Button
                variant="contained"
                fullWidth
                sx={{
                  backgroundColor: '#00205b',
                  color: 'white',
                  borderRadius: 2,
                  '&:hover': {
                    backgroundColor: '#000066',
                  },
                }}
              >
                Proceed to Checkout
              </Button>

              <Button
                variant="contained"
                component={Link}
                to="/"
                fullWidth
                sx={{
                  backgroundColor: '#00205b',
                  color: 'white',
                  borderRadius: 2,
                  '&:hover': {
                    backgroundColor: '#000066',
                  },
                }}
              >
                Go Back
              </Button>
            </Box>

          </Box>
        </>
      )}

      {/* Fixed Go Back Button */}
     

    </Container>
  );
};

export default CartPage;
