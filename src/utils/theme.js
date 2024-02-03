import { extendTheme } from '@chakra-ui/react';

const fonts = {
  body: `'BodyFont', sans-serif`,
  heading: `'HeadingFont', sans-serif`,
};

const colors = {
  test: '#f7fafc',
};

const theme = extendTheme({ fonts, colors });

export default theme;
