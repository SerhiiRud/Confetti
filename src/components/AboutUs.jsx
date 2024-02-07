import { Box, Heading, Grid, GridItem } from '@chakra-ui/react';
import { aboutUsData } from '../utils/aboutUsData';
import Slider from './Slider';
import { AboutSlide } from './AboutSlide';

export const AboutUs = () => {
  return (
    <Box as="section" id="about" mb={['124px', '80px', '100px']}>
      <Heading
        maxW={['260px', '520px']}
        mb={['16px', '16px', '24px']}
        mx={'auto'}
        textAlign="center"
        fontSize={['36px', '48px', '56px']}
        fontWeight={500}
        lineHeight={[0.77, 0.79]}
        letterSpacing={-0.01}
        color={'rgb(34, 34, 34)'}
      >
        Kreatywny zespół dekoratorów
      </Heading>
      <Box
        maxW={['260px', '520px']}
        mb={['36px', '48px', '64px']}
        mx={'auto'}
        textAlign="center"
        fontFamily={'Inter'}
        fontSize={['20px', '24px']}
        lineHeight={[1.4, 1.4, 1.2]}
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
