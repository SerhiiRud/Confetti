import React from 'react';
import {
  ChakraProvider,
  Box,
  Container,
  Text,
  Link,
  VStack,
  Code,
  Grid,
} from '@chakra-ui/react';
import Fonts from './utils/fonts';
import theme from './utils/theme';
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
      <Fonts />
      <Container>
        <Header>
          <BurgerMenu />
        </Header>
        <Hero />
        <AboutUs />
        <Reviews />
        <ContactUs />
        <Footer />
      </Container>
    </ChakraProvider>
  );
}

export default App;
