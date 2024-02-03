import { Heading, Box } from '@chakra-ui/react';
import { BurgerMenu } from './BurgerMenu';

export const Header = () => {
  return (
    <Heading color={'test'} fontFamily={'heading'}>
      CONFETTI
      <BurgerMenu />
    </Heading>
  );
};
