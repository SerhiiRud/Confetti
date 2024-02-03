import { extendTheme } from '@chakra-ui/react';

const fonts = {
  body: `'Anzeigen Grotesk T', sans-serif`,
  heading: `'Anzeigen Grotesk T', sans-serif`,
};

const colors = {
  test: '#f7fafc',
};

const theme = extendTheme({ fonts, colors });

export default theme;
