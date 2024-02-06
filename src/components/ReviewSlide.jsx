import { Box, Text } from '@chakra-ui/react';

export const ReviewSlide = ({ content, author }) => {
  return (
    <Box
      mx={['auto', '20px']}
      w={['320px', '346px']}
      h={['229px', '220px']}
      p={'24px'}
      color={'rgb(34, 34, 34)'}
      bg={'rgb(255, 239, 240)'}
      borderRadius={'24px'}
      fontFamily={'Inter'}
      fontSize={'18px'}
      fontWeight={500}
      lineHeight={1.3}
      letterSpacing={-0.01}
    >
      <Text>{content}</Text>
      <Text>{author}</Text>
    </Box>
  );
};
