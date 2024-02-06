import { useDisclosure } from '@chakra-ui/react';
import {
  Heading,
  Box,
  Button,
  Container,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Portal,
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
        w={'100%'}
        className={className}
      >
        <Container
          maxW={[480, 768, 1280]}
          display={'flex'}
          justifyContent={'space-between'}
          alignItems={'center'}
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
        </Container>
        <Portal>
          <Button
            onClick={onOpen}
            pos={'fixed'}
            top={'38px'}
            right={['54px', '54px', '54px', '54px', '54px']}
            size={'3xs'}
            bg={'transparent'}
          >
            <svg width="24" height="24">
              <use href={`${icon}#menu-icon`}></use>
            </svg>
          </Button>
        </Portal>
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
