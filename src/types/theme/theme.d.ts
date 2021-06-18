import { Palette } from '@material-ui/core/styles/createPalette'

declare module "@material-ui/core/styles/createPalette" {
  interface Palette {
    white: Palette['primary'];
  }
  interface PaletteOptions {
    white: PaletteOptions['primary'];
  }
}