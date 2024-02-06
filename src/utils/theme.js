import { extendTheme } from '@chakra-ui/react';

const styles = {
  global: {
    'h1, h2, h3. h4, h5, h6': {
      m: '0',
    },
  },
};

const fonts = {
  body: `'Anzeigen Grotesk T', sans-serif`,
  heading: `'Anzeigen Grotesk T', sans-serif`,
};

const colors = {
  logoColor: 'rgb(237, 75, 94)',
  test: '#f7fafc',
};

const breakpoints = {
  base: null, // 0px
  sm: '30em', // ~480px. em is a relative unit and is dependant on the font-size.
  md: '48em', // ~768px
  // lg: null, // ~992px
  xl: '80em', // ~1280px
  '2xl': '96em', // ~1536px
};

const theme = extendTheme({
  styles,
  fonts,
  colors,
  breakpoints,
});

export default theme;
