import { useDisclosure } from '@chakra-ui/react';
import {
  Box,
  Button,
  Container,
  Image,
  Link as ChakraLink,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Portal,
  Text,
} from '@chakra-ui/react';
import { BurgerMenu } from './BurgerMenu';
import { ReactComponent as MenuIcon } from '../images/svg/burger-menu.svg';
import { ReactComponent as CloseIcon } from '../images/svg/close-menu.svg';
import logo from '../images/jpg/logo.png';
import icon from '../images/svg/symbol-defs.svg';

export const Header = ({ className }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box
        as="header"
        pos={'fixed'}
        left={0}
        my={'32px'}
        pl={'20px'}
        pr={['42px', '85px']}
        w={'100%'}
        className={className}
      >
        <Container
          maxW={[480, 768, 1280]}
          display={'flex'}
          justifyContent={'space-between'}
          alignItems={'center'}
        >
          <a href="./" aria-label="Link to home page">
            <Image src={logo} alt="Confetti" ml={[0, 0, '30px']} />
          </a>
          <Text
            fontSize={'24px'}
            fontWeight={500}
            lineHeight={0.9}
            letterSpacing={-0.01}
            _hover={{ color: 'rgb(237, 75, 94)' }}
            _focus={{ color: 'rgb(237, 75, 94)' }}
          >
            MENU
          </Text>
        </Container>
        <Portal>
          <Button
            onClick={onOpen}
            pos={'fixed'}
            top={'36px'}
            right={['28px', '68px', '68px', '68px', '68px']}
            size={'3xs'}
            bg={'transparent'}
            _hover={{ fill: 'rgb(237, 75, 94)' }}
            _focus={{ fill: 'rgb(237, 75, 94)' }}
          >
            <svg width="24" height="24">
              <use href={`${icon}#menu-icon`}></use>
            </svg>
          </Button>
        </Portal>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose} w={'100%'}>
        <ModalOverlay />
        <ModalContent
          maxW={['360px', '768px', '1440px']}
          h={['500px', '500px', '600px']}
          py={['30px', '32px', '37px']}
          px={['20px', '30px', '112px']}
        >
          <ModalCloseButton onClick={onClose} mt={'20px'} mr={'10px'}>
            <CloseIcon />
          </ModalCloseButton>
          <ModalBody>
            <BurgerMenu onClose={onClose} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
