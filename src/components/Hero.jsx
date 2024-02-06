import { Box } from '@chakra-ui/react';
import background from '../images/jpg/Frame.png';
export const Hero = () => {
  return (
    <Box
      as="section"
      id="hero"
      h={'690px'}
      backgroundImage={`url(${background})`}
      backgroundPosition={'center'}
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
    ></Box>
  );
};
