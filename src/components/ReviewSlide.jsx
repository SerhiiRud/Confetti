import { Box, Text } from '@chakra-ui/react';
import icon from '../images/svg/symbol-defs.svg';

export const ReviewSlide = ({ content, author }) => {
  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'space-between'}
      mx={['auto', '20px', 'auto']}
      w={['320px', '346px', '388px']}
      h={['229px', '220px', '277px']}
      p={'24px'}
      bg={'rgb(255, 239, 240)'}
      borderRadius={'24px'}
      fontFamily={'Inter'}
    >
      <Text
        textAlign={'left'}
        fontSize={['18px', '18px', '24px']}
        fontWeight={500}
        lineHeight={[1.3, 1.3, 1.2]}
        letterSpacing={-0.01}
        color={'rgb(34, 34, 34)'}
      >
        {content}
      </Text>
      <Box display={'flex'} alignItems={'center'} gap={'8px'}>
        <Box>
          <svg width="32" height="32">
            <use href={`${icon}#icon-user`}></use>
          </svg>
        </Box>
        <Text
          fontSize={'16px'}
          fontWeight={500}
          lineHeight={1.19}
          letterSpacing={-0.01}
          color={'rgb(86, 81, 72)'}
        >
          {author}
        </Text>
      </Box>
    </Box>
  );
};
