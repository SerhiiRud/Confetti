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
        pr={'85px'}
        display={'flex'}
        justifyContent={'space-between'}
        alignItems={'center'}
        w={'100%'}
        className={className}
      >
        <Heading
          size="2xl"
          fontWeight={500}
          color={'logoColor'}
          lineHeight={0.78}
          letterSpacing={-0.01}
        >
          CONFETTI
        </Heading>
        <Text
          fontSize={'24px'}
          fontWeight={500}
          lineHeight={0.9}
          letterSpacing={-0.01}
        >
          MENU
        </Text>
      </Box>
      <Button
        onClick={onOpen}
        pos={'fixed'}
        right={'54px'}
        top={'38px'}
        size={'3xs'}
        bg={'transparent'}
      >
        <svg width="24" height="24">
          <use href={`${icon}#menu-icon`}></use>
        </svg>
      </Button>
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
