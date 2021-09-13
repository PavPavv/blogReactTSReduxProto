import { createTheme } from "@material-ui/core";

enum Colors {
  white = '#ffffff',
  darkWhite = '#f2f2f2',

  lightBlack = '#282C34',
  black = '#24292E',

  lightGray = '#F0F2F5',
  gray = '#989898',

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
      main: Colors.yellow,
      dark: Colors.gray,
      contrastText: Colors.white,
    },
    info: {
      main: Colors.lightGray,
    },
    error: {
      main: Colors.red,
    },
  },

  typography: {
    h1: {
      fontSize: 48,
      fontWeight: 'bold',
    },
    h2: {
      fontSize: 36,
      fontWeight: 'bold',
    },
    h3: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    subtitle1: {
      fontSize: 22,
    },
    subtitle2: {
      fontSize: 18,
    },
    body1: {
      fontSize: 16,
    },
    body2: {
      fontSize: 14,
    }

  }
});