import { Box, Image, Text } from '@chakra-ui/react';
import logo from '../images/jpg/logo.png';

export const Footer = () => {
  return (
    <Box
      as="footer"
      display={'flex'}
      justifyContent={'space-between'}
      alignItems={'center'}
      p={'25px'}
      borderTop={'1px solid rgb(237, 75, 94)'}
    >
      <Image src={logo} alt="Confetti" />
      <Text>confetti @ 2023</Text>
    </Box>
  );
};
