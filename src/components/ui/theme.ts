import { createTheme } from "@material-ui/core";

enum Colors {
  white = '#ffffff',
  darkWhite = '#f2f2f2',
  semiWhite = '#fafafa',

  lightBlack = '#282C34',
  black = '#24292E',

  lightGray = '#F0F2F5',
  gray = '#989898',

  green = '#8EF2B8',

  lightBlue = '#007AC7',
  blue = '#1B66D6',
  darkBlue = '#1654B0',

  red = '#E65B5B',

  yellow = '#CEFF00',
};

export const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      light: Colors.white,
      main: Colors.blue,
      dark: Colors.darkBlue,
      contrastText: Colors.black,
    },
    secondary: {
      light: Colors.lightBlack,
      main: Colors.black,
      dark: Colors.gray,
      contrastText: Colors.white,
    },
    info: {
      main: Colors.lightGray,
      light: Colors.yellow,
      dark: Colors.green,
    },
    error: {
      main: Colors.red,
    },
    common: {
      white: Colors.semiWhite,
    },
    divider: Colors.lightBlue,
  },

  typography: {
    h1: {
      fontFamily: 'Titillium Web',
      fontSize: 48,
      fontWeight: 'bold',
    },
    h2: {
      fontFamily: 'Titillium Web',
      fontSize: 36,
      fontWeight: 'bold',
    },
    h3: {
      fontFamily: 'Titillium Web',
      fontSize: 28,
      fontWeight: 'bold',
    },
    subtitle1: {
      fontFamily: 'Titillium Web',
      fontSize: 22,
      lineHeight: '24px',
    },
    subtitle2: {
      fontFamily: 'Titillium Web',
      fontSize: 18,
    },
    body1: {
      fontFamily: 'Titillium Web',
      fontSize: 16,
      fontWeight: 600,
      letterSpacing: 1,
    },
    body2: {
      fontFamily: 'Titillium Web',
      fontSize: 16,
    }

  }
});