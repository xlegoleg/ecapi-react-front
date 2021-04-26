import { createMuiTheme } from '@material-ui/core/styles';
import { yellow, amber, grey } from '@material-ui/core/colors'

export const mainTheme = createMuiTheme({
  palette: {
    secondary: {
      main: yellow[600],
      light: yellow[400],
      dark: amber[600]
    },
    primary: {
      main: grey[900],
      light: grey[800]
    }
  },
  typography: {
    fontFamily: [
      '"Lato"',
      'sans-serif'
    ].join(',')
  }
});