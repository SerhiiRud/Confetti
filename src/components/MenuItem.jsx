import { Link as ChakraLink, ListItem } from '@chakra-ui/react';
import { Link as SmoothLink } from 'react-scroll';

export const MenuItem = ({ anchor, content }) => {
  return (
    <ListItem>
      <ChakraLink
        as={SmoothLink}
        to={anchor}
        smooth={true}
        offset={-70}
        duration={1000}
        color={'red'}
        fontSize={24}
        fontWeight={500}
      >
        {content}
      </ChakraLink>
    </ListItem>
  );
};
