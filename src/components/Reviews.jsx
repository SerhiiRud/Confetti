import { Box, Heading, Grid, GridItem } from '@chakra-ui/react';
import { reviewsData } from '../utils/reviewsData';
import Slider from './Slider';
import { ReviewSlide } from './ReviewSlide';

export const Reviews = () => {
  return (
    <Box
      as="section"
      id="reviews"
      mb={['124px', '80px', '100px']}
      fontFamily={'Inter'}
    >
      <Heading
        mb={['36px', '48px', '100px']}
        textAlign="center"
        fontSize={['36px', '48px', '64px']}
        fontWeight={500}
        lineHeight={[1.1, 1.1, 0.79]}
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
      <Grid
        display={{ base: 'none', sm: 'none', md: 'grid' }}
        templateColumns={{
          md: 'repeat(3, 1fr)',
        }}
        gap={'26px'}
      >
        {reviewsData.map(item => {
          return (
            <GridItem key={item.author}>
              <ReviewSlide content={item.content} author={item.author} />
            </GridItem>
          );
        })}
      </Grid>
    </Box>
  );
};
