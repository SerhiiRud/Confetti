import { Box, Heading } from '@chakra-ui/react';
import { aboutUsData } from '../utils/aboutUsData';
import Slider from './Slider';

export const AboutUs = () => {
  return (
    <section id="about" h={'600px'}>
      <Heading
        mb={'16px'}
        textAlign="center"
        fontSize={'48px'}
        fontWeight={500}
        lineHeight={0.79}
        letterSpacing={-0.01}
        color={'rgb(34, 34, 34)'}
      >
        Kreatywny zespół dekoratorów
      </Heading>
      <Box
        textAlign="center"
        fontFamily={'Inter'}
        fontSize={'24px'}
        fontWeight={500}
      >
        Młodzi i energiczni, rozwijający działalność w zakresie tworzenia
        dekoracji na imprezy i wydarzenia
      </Box>
      <Slider slides={aboutUsData} />
    </section>
  );
};
