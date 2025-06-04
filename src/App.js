import React from 'react';
import Navbar from './components/Navbar';
import HeaderSection from './components/HeaderSection';
import JewelleryCategories from './components/JewelleryCategories';
import AutoSlider from './components/AutoSlider';
import { Container, CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import JewelrySection from './components/JewellerySection';

import ShopByGender from './components/ShopByGender';
import GiftsAndMore from './components/GiftsAndMore';
import Footer from './components/Footer';
import CartPage from './pages/CartPages';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const theme = createTheme();

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        <HeaderSection />
        <Routes>
          <Route path="/cart" element={
            <Container maxWidth={false} disableGutters>
              <CartPage />
            </Container>
          } />
          <Route path="*" element={
            <Container maxWidth={false} disableGutters>
              <JewelleryCategories />
              <AutoSlider />
              <JewelrySection />
              <ShopByGender />
              <GiftsAndMore />
              <Footer />
            </Container>
          } />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
