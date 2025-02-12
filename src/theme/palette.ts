import { PaletteColorOptions, PaletteOptions } from '@mui/material/styles';
import {
  grey,
  red,
  green,
  blue,
  cyan,
  purple,
  violate,
  yellow,
  white,
  transparentRed,
  transparentGreen,
  transparentYellow,
} from './colors';

declare module '@mui/material/styles' {
  interface PaletteOptions {
    neutral?: PaletteColorOptions;
    transparent?: {
      success: PaletteColorOptions;
      warning: PaletteColorOptions;
      error: PaletteColorOptions;
    };
    gradients?: {
      primary: PaletteColorOptions;
    };
  }
  interface SimplePaletteColorOptions {
    lighter?: string;
    darker?: string;
    state?: string;
  }
  interface Palette {
    neutral: PaletteColor;
    gradients: {
      primary: PaletteColor;
    };
    transparent: {
      success: PaletteColor;
      warning: PaletteColor;
      error: PaletteColor;
    };
  }
  interface PaletteColor {
    lighter: string;
    darker: string;
    state: string;
  }
}

const palette: PaletteOptions = {
  neutral: {
    lighter: grey[100],
    light: grey[200],
    main: grey[300],
    dark: grey[400],
    darker: grey[600],
  },
  primary: {
    main: purple[500],
    dark: purple[800],
  },
  secondary: {
    lighter: blue[200],
    light: cyan[400],
    main: cyan[500],
    dark: cyan[900],
    darker: blue[500],
  },
  info: {
    main: blue[700],
    dark: blue[800],
    darker: blue[900],
  },
  success: {
    main: green[500],
  },
  warning: {
    main: yellow[500],
  },
  error: {
    main: red[500],
  },
  text: {
    primary: white[500],
    secondary: grey[300],
    disabled: grey[500],
  },
  gradients: {
    primary: {
      main: purple[500],
      state: violate[600],
    },
  },
  transparent: {
    success: {
      main: transparentGreen[500],
    },
    warning: {
      main: transparentYellow[500],
    },
    error: {
      main: transparentRed[500],
    },
  },
};

export default palette;
