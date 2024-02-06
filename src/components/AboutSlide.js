import { Box, Heading, Text } from '@chakra-ui/react';

export const AboutSlide = ({ title, content, background }) => {
  return (
    <Box w={'320px'} h={'253px'} p={'24px'} color={'#FFF'} bg={background}>
      <Heading>{title}</Heading>
      <Text>{content}</Text>
    </Box>
  );
};
