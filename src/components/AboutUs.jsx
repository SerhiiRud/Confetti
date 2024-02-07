import { Box, Heading, Grid, GridItem } from '@chakra-ui/react';
import { aboutUsData } from '../utils/aboutUsData';
import Slider from './Slider';
import { AboutSlide } from './AboutSlide';

export const AboutUs = () => {
  return (
    <Box as="section" id="about" mb={'124px'}>
      <Heading
        mb={'16px'}
        textAlign="center"
        fontSize={'36px'}
        fontWeight={500}
        lineHeight={0.77}
        letterSpacing={-0.01}
        color={'rgb(34, 34, 34)'}
      >
        Kreatywny zespół dekoratorów
      </Heading>
      <Box
        mb={'36px'}
        textAlign="center"
        fontFamily={'Inter'}
        fontSize={'20px'}
        lineHeight={1.4}
        fontWeight={500}
      >
        Młodzi i energiczni, rozwijający działalność w zakresie tworzenia
        dekoracji na imprezy i wydarzenia
      </Box>
      <Box display={{ base: 'block', sm: 'none', md: 'none' }}>
        <Slider section="about" slides={aboutUsData} />
      </Box>
      <Grid
        display={{ base: 'none', sm: 'grid', md: 'grid' }}
        templateColumns={{
          base: 'none',
          sm: 'repeat(1, 1fr)',
          md: 'repeat(2, 1fr)',
        }}
        gap={'24px'}
      >
        {aboutUsData.map(item => {
          return (
            <GridItem key={item.title}>
              <AboutSlide
                title={item.title}
                content={item.content}
                background={item.background}
              />
            </GridItem>
          );
        })}
      </Grid>
    </Box>
  );
};
