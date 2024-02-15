import { Button, Portal, Text } from '@chakra-ui/react';
import icon from '../images/svg/symbol-defs.svg';
import { ReactComponent as MenuIcon } from '../images/svg/burger-menu.svg';

export const MenuButton = ({ onOpen }) => {
  return (
    <>
      <Button
        onClick={onOpen}
        position={'relative'}
        display={'flex'}
        alignItems={'center'}
        gap={'8px'}
        //width={'177px'}
        height={'24px'}
        fontFamily={'Anzeigen Grotesk T'}
        fontSize={'24px'}
        lineHeight={'90%'}
        letterSpacing={'-0.24px'}
        textTransform={'uppercase'}
        border={'none'}
        backgroundColor={'transparent'}
        cursor={'pointer'}
        //zIndex={20}
        //   transition: color 0.3s ease;
        _hover={{ color: '#ed4b5e' }}
        _focus={{ color: '#ed4b5e' }}
      >
        MENU
        <MenuIcon
          fill={'#222222'}
          stroke={'#222222'}
          position={'fixed'}
          margin-left={'53px'}
          width={'24'}
        />
      </Button>
    </>
  );
};
