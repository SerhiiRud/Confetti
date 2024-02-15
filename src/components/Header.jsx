import { useDisclosure } from '@chakra-ui/react';
import {
  Box,
  Container,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';
import { BurgerMenu } from './BurgerMenu';
import { MenuButton } from './MenuButton';
import { ReactComponent as CloseIcon } from '../images/svg/close-menu.svg';
import logo from '../images/jpg/logo.png';

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
        // className={className}
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
          <MenuButton onOpen={onOpen} />
        </Container>
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
