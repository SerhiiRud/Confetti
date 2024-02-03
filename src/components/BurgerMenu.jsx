import { List } from '@chakra-ui/react';
import { MenuItem } from './MenuItem';

export const BurgerMenu = () => {
  return (
    <nav>
      <List>
        <MenuItem anchor="hero" content="GŁÓWNA" />
        <MenuItem anchor="about" content="O NAS" />
        <MenuItem anchor="reviews" content="RECENZJE" />
        <MenuItem anchor="contactus" content="KONTAKTY" />
      </List>
    </nav>
  );
};
