import { Box, Heading, Link } from '@chakra-ui/react';
import { ReactComponent as CallIcon } from '../images/svg/call.svg';
import { ReactComponent as MailIcon } from '../images/svg/sms.svg';
import { Form } from './Form';

export const ContactUs = () => {
  return (
    <Box as="section" id="contactus" mb={'36px'}>
      <Heading
        mb={'36px'}
        textAlign="center"
        fontSize={'36px'}
        fontWeight={500}
        lineHeight={1.1}
        letterSpacing={-0.01}
        color={'rgb(237, 75, 94)'}
      >
        Kontakty
      </Heading>
      <Box
        mb={'24px'}
        mx={'auto'}
        w={'320px'}
        textAlign="center"
        fontSize={'28px'}
        fontWeight={500}
        lineHeight={0.79}
        letterSpacing={-0.01}
        color={'rgb(34, 34, 34)'}
      >
        Confetti - Studio Dekoracij Balonami  Warszawa
      </Box>
      <Box
        mb={'16px'}
        display={'flex'}
        justifyContent={'center'}
        fontSize={'20px'}
        fontWeight={500}
        lineHeight={1.2}
        letterSpacing={-0.01}
        color={'rgb(86, 81, 72)'}
      >
        <CallIcon aria-label="mail" />
        <Link href="tel:+48 793 351 407">+48 793 351 407</Link>
      </Box>
      <Box
        mb={'36px'}
        display={'flex'}
        justifyContent={'center'}
        fontSize={'20px'}
        fontWeight={500}
        lineHeight={1.2}
        letterSpacing={-0.01}
        color={'rgb(86, 81, 72)'}
      >
        <MailIcon aria-label="call" />
        <Link href="mailtol:confettibalony@gmail.com">
          confettibalony@gmail.com
        </Link>
      </Box>
      <Form />
    </Box>
  );
};
