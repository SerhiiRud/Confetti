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
    >
      <Heading
        mb={'55px'}
        textAlign={'left'}
        fontSize={'24px'}
        fontWeight={500}
        lineHeight={1.2}
        letterSpacing={-0.01}
      >
        {title}
      </Heading>
      <Text
        fontSize={'16px'}
        fontWeight={500}
        lineHeight={1.45}
        letterSpacing={-0.01}
      >
        {content}
      </Text>
    </Box>
  );
};
