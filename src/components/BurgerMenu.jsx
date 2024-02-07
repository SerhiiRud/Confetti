import { Box, Image, List } from '@chakra-ui/react';
import { MenuItem } from './MenuItem';
import logo from '../images/jpg/logo.png';

export const BurgerMenu = ({ onClose }) => {
  return (
    <Box>
      <Image src={logo} alt="Confetti" />
      <nav>
        <List textAlign={'center'} mt={'62px'}>
          <MenuItem anchor="hero" content="GŁÓWNA" onClose={onClose} />
          <MenuItem anchor="about" content="O NAS" onClose={onClose} />
          <MenuItem anchor="reviews" content="RECENZJE" onClose={onClose} />
          <MenuItem anchor="contactus" content="KONTAKTY" onClose={onClose} />
        </List>
      </nav>
    </Box>
  );
};
