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

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth={false} disableGutters>
        <Navbar />
        <HeaderSection />
        <JewelleryCategories />
         <AutoSlider /> {/* ← Make sure this line is here */}
         <JewelrySection />
       <ShopByGender />
       <GiftsAndMore />
       <Footer />
      </Container>
    </ThemeProvider>
  );
}

export default App;
