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
      display={'flex'}
      flexDir={'column'}
      alignItems={'center'}
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
          w={'320px'}
          p={'24px'}
          fontFamily={'Inter'}
          fontSize={'18px'}
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
          w={'320px'}
          p={'24px'}
          fontFamily={'Inter'}
          fontSize={'18px'}
          fontWeight={500}
          lineHeight={1.2}
          letterSpacing={-0.01}
          color={'rgb(136, 136, 136)'}
          bg={'#FFF'}
        ></Input>
      </FormControl>
      <FormControl w={'320px'}>
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
          w={'320px'}
          h={'128px'}
          p={'24px'}
          fontFamily={'Inter'}
          fontSize={'18px'}
          fontWeight={500}
          lineHeight={1.2}
          letterSpacing={-0.01}
          color={'rgb(136, 136, 136)'}
          bg={'#FFF'}
        ></Textarea>
      </FormControl>
      <Button w={'320px'} h={'62px'} color={'rgb(136, 136, 136)'} bg={'#FFF'}>
        WYŚLIJ
      </Button>
    </Box>
  );
};
