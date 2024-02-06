import { Box, Heading } from '@chakra-ui/react';
import { reviewsData } from '../utils/reviewsData';
import Slider from './Slider';

export const Reviews = () => {
  return (
    <Box as="section" id="reviews" mb={'36px'}>
      <Heading
        textAlign="center"
        fontSize={'36px'}
        fontWeight={500}
        lineHeight={1.1}
        letterSpacing={-0.01}
        color={'rgb(237, 75, 94)'}
      >
        Recenzje
      </Heading>
      <Box display={{ base: 'block', sm: 'none', md: 'none' }}>
        <Slider section="reviews-mob" slides={reviewsData} />
      </Box>
      <Box display={{ base: 'none', sm: 'block', md: 'none' }}>
        <Slider section="reviews-tab" slides={reviewsData} />
      </Box>
    </Box>
  );
};
