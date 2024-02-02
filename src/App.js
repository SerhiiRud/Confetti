import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Header } from './components/Header';
import { BurgerMenu } from './components/BurgerMenu';
import { Hero } from './components/Hero';
import { AboutUs } from './components/AboutUs';
import { Reviews } from './components/Reviews';
import { ContactUs } from './components/ContactUs';
import { Footer } from './components/Footer';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Header>
        <BurgerMenu />
      </Header>
      <Hero />
      <AboutUs />
      <Reviews />
      <ContactUs />
      <Footer />
    </ChakraProvider>
  );
}

export default App;
