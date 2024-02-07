import { Box, Text } from '@chakra-ui/react';
import icon from '../images/svg/symbol-defs.svg';

export const ReviewSlide = ({ content, author }) => {
  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'space-between'}
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
      <Box display={'flex'} alignItems={'center'} gap={'8px'}>
        <Box>
          <svg width="32" height="32">
            <use href={`${icon}#icon-user`}></use>
          </svg>
        </Box>
        <Text>{author}</Text>
      </Box>
    </Box>
  );
};
