import { Link as ChakraLink, ListItem } from '@chakra-ui/react';
import { Link as SmoothLink } from 'react-scroll';

export const MenuItem = ({ anchor, content, onClose }) => {
  return (
    <ListItem mt={['24px', '36px']}>
      <ChakraLink
        as={SmoothLink}
        to={anchor}
        smooth={true}
        offset={-70}
        duration={1000}
        color={'rgb(34, 34, 34)'}
        fontSize={['24px', '40px']}
        fontWeight={500}
        lineHeight={0.79}
        letterSpacing={-0.01}
        onClick={onClose}
      >
        {content}
      </ChakraLink>
    </ListItem>
  );
};
