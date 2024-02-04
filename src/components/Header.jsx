import { useDisclosure } from '@chakra-ui/react';
import {
  Heading,
  Box,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
} from '@chakra-ui/react';
import { BurgerMenu } from './BurgerMenu';
import icon from '../images/svg/symbol-defs.svg';

export const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box
        as="header"
        pos={'fixed'}
        display={'flex'}
        gap={'160px'}
        alignItems={'center'}
      >
        <Heading color={'logoColor'}>CONFETTI</Heading>
        <Box display={'flex'} gap={'8px'}>
          <Text>MENU</Text>
          <Button onClick={onOpen} size={'3xs'} bg={'transparent'}>
            <svg width="24" height="24">
              <use href={`${icon}#menu-icon`}></use>
            </svg>
          </Button>
        </Box>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <BurgerMenu onClose={onClose} />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
