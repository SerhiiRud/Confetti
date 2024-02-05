import { Box } from '@chakra-ui/react';
export const Hero = () => {
  return (
    <Box
      as="section"
      id="hero"
      h={'690px'}
      bgImage="url('../../images/jpg/Frame.png')"
      backgroundPosition={'center'}
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
    ></Box>
  );
};
