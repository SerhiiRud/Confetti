import { Box, Heading, Link } from '@chakra-ui/react';
import { ReactComponent as CallIcon } from '../images/svg/call.svg';
import { ReactComponent as MailIcon } from '../images/svg/sms.svg';
import { Form } from './Form';
import baloons from '../images/jpg/HeroDesktopBalloons.png';

export const ContactUs = () => {
  return (
    <Box
      as="section"
      id="contactus"
      display={['block', 'block', 'flex']}
      mb={'80px'}
      backgroundImage={['none', `url(${baloons})`, `url(${baloons})`]}
      backgroundRepeat={'no-repeat'}
      backgroundSize={['90%', '90%', '80%']}
      backgroundPosition={['center', 'center', '140% 40%']}
    >
      <Box
        display={['block', 'block', 'flex']}
        flexDirection={'column'}
        justifyContent={'center'}
      >
        <Heading
          mb={['36px', '48px', '56px']}
          textAlign={['center', 'center', 'left']}
          fontSize={['36px', '48px', '100px']}
          fontWeight={500}
          lineHeight={1.1}
          letterSpacing={-0.01}
          color={'rgb(237, 75, 94)'}
        >
          Kontakty
        </Heading>
        <Box
          mb={['24px', '24px', '32px']}
          mx={'auto'}
          w={['320px', '320px']}
          textAlign={['center', 'center', 'left']}
          fontSize={['28px', '28px', '40px']}
          fontWeight={500}
          lineHeight={[0.79, 1.2, 0.95]}
          letterSpacing={-0.01}
          color={'rgb(34, 34, 34)'}
        >
          Confetti - Studio Dekoracij Balonami Warszawa
        </Box>
        <Box
          mb={'16px'}
          display={'flex'}
          justifyContent={['center', 'center', 'left']}
          fontFamily={'Inter'}
          fontSize={['20px', '24px']}
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
          justifyContent={['center', 'center', 'left']}
          fontFamily={'Inter'}
          fontSize={['20px', '24px']}
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
      </Box>
      <Form />
    </Box>
  );
};
