import { Box, Heading, List } from '@chakra-ui/react';
import { MenuItem } from './MenuItem';

export const BurgerMenu = ({ onClose }) => {
  return (
    <Box>
      <Heading as="h2">CONFETTI</Heading>
      <nav>
        <List>
          <MenuItem anchor="hero" content="GŁÓWNA" onClose={onClose} />
          <MenuItem anchor="about" content="O NAS" onClose={onClose} />
          <MenuItem anchor="reviews" content="RECENZJE" onClose={onClose} />
          <MenuItem anchor="contactus" content="KONTAKTY" onClose={onClose} />
        </List>
      </nav>
    </Box>
  );
};
