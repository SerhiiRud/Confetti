import { Box, Heading, Text } from '@chakra-ui/react';

export const AboutSlide = ({ title, content, background }) => {
  return (
    <Box
      mx={'auto'}
      w={['320px', '596px']}
      h={['253px', '287px', '293px']}
      p={['24px', '48px']}
      color={'#FFF'}
      bg={background}
      borderRadius={'24px'}
      fontFamily={'Inter'}
    >
      <Heading
        mb={'55px'}
        textAlign={'left'}
        fontSize={['24px', '40px']}
        fontWeight={500}
        lineHeight={[1.2, 0.8, 0.95]}
        letterSpacing={-0.01}
      >
        {title}
      </Heading>
      <Text
        fontSize={['16px', '20px']}
        fontWeight={500}
        lineHeight={[1.45, 1.45, 1.35]}
        letterSpacing={-0.01}
      >
        {content}
      </Text>
    </Box>
  );
};
