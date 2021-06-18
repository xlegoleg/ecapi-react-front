import { createMuiTheme } from '@material-ui/core/styles';
import { yellow, amber, grey } from '@material-ui/core/colors'
import { useGlobalStyles } from '@styles/globals/main';
import { ThemeProvider } from '@material-ui/styles';
import React from 'react';

export const mainTheme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
        html: {
          width: '100%',
          height: '100%'
        },
        body: {
          width: '100%',
          height: '100%'
        }
      },
    }
  },
  palette: {
    secondary: {
      main: yellow[600],
      light: yellow[400],
      dark: amber[600]
    },
    primary: {
      main: grey[900],
      light: grey[800]
    },
    white: {
      main: '#fff'
    },
  },
  typography: {
    fontFamily: [
      '"Lato"',
      'sans-serif'
    ].join(',')
  }
});

export const MainThemeProvider: React.FC = ({ children }) => {
  useGlobalStyles();

  return (
    <ThemeProvider theme={mainTheme}>{children}</ThemeProvider>
  );
}