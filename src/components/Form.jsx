import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
} from '@chakra-ui/react';

export const Form = () => {
  return (
    <Box
      as="form"
      mx={'auto'}
      w={['360px', '500px', '608px']}
      h={['569px', '634px', '608px']}
      py={['51px', '57px']}
      px={['16px', '63px', '82px']}
      display={'flex'}
      flexDir={'column'}
      borderRadius={18}
      bg={'rgb(255, 239, 240)'}
    >
      <FormControl isRequired w={'320px'} mb={'24px'}>
        <FormLabel
          ml={'24px'}
          fontFamily={'Inter'}
          fontSize={'16px'}
          fontWeight={500}
          lineHeight={1.18}
          letterSpacing={-0.01}
          color={'rgb(148, 148, 148)'}
        >
          Imię
        </FormLabel>
        <Input
          placeholder="Imię"
          mx={'auto'}
          w={['320px', '395px', '443px']}
          p={'24px'}
          fontFamily={'Inter'}
          fontSize={['18px', '20px', '20px']}
          fontWeight={500}
          lineHeight={1.2}
          letterSpacing={-0.01}
          color={'rgb(136, 136, 136)'}
          bg={'#FFF'}
        ></Input>
      </FormControl>
      <FormControl isRequired w={'320px'} mb={'24px'}>
        <FormLabel
          ml={'24px'}
          fontFamily={'Inter'}
          fontSize={'16px'}
          fontWeight={500}
          lineHeight={1.18}
          letterSpacing={-0.01}
          color={'rgb(148, 148, 148)'}
        >
          E-mail
        </FormLabel>
        <Input
          placeholder="mail@gmail.com"
          errorBorderColor="red.300"
          mx={'auto'}
          w={['320px', '395px', '443px']}
          p={'24px'}
          fontFamily={'Inter'}
          fontSize={['18px', '20px', '20px']}
          fontWeight={500}
          lineHeight={1.2}
          letterSpacing={-0.01}
          color={'rgb(136, 136, 136)'}
          bg={'#FFF'}
        ></Input>
      </FormControl>
      <FormControl w={'320px'} mb={['24px', '32px']}>
        <FormLabel
          ml={'24px'}
          fontFamily={'Inter'}
          fontSize={'16px'}
          fontWeight={500}
          lineHeight={1.18}
          letterSpacing={-0.01}
          color={'rgb(148, 148, 148)'}
        >
          Wiadomość
        </FormLabel>
        <Textarea
          placeholder="Twoja wiadomość..."
          mx={'auto'}
          w={['320px', '395px', '443px']}
          h={['128px', '136px', '136px']}
          p={'24px'}
          fontFamily={'Inter'}
          fontSize={['18px', '20px', '20px']}
          fontWeight={500}
          lineHeight={1.2}
          letterSpacing={-0.01}
          color={'rgb(136, 136, 136)'}
          bg={'#FFF'}
        ></Textarea>
      </FormControl>
      <Button
        type="submit"
        mx={'auto'}
        p={'32px'}
        w={['320px', '395px', '443px']}
        h={['62px', '80px']}
        fontFamily={'Anzeigen Grotesk T'}
        fontSize={['28px', '40px']}
        fontWeight={500}
        lineHeight={[1.27, 0.8]}
        letterSpacing={-0.01}
        textTransform={'uppercase'}
        color={'#FFF'}
        bg={'rgb(237, 75, 94)'}
      >
        Wyślij
      </Button>
    </Box>
  );
};
