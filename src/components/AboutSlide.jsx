import { Box, Heading, Text } from '@chakra-ui/react';

export const AboutSlide = ({ title, content, background }) => {
  return (
    <Box
      mx={'auto'}
      w={'320px'}
      h={'253px'}
      p={'24px'}
      color={'#FFF'}
      bg={background}
      borderRadius={'24px'}
      fontFamily={'Inter'}
      fontSize={'16px'}
      fontWeight={500}
      lineHeight={1.45}
      letterSpacing={-0.01}
    >
      <Heading>{title}</Heading>
      <Text>{content}</Text>
    </Box>
  );
};
