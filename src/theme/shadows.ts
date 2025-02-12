declare module '@mui/material/styles' {
  interface Theme {
    customShadows: string[];
  }
  interface ThemeOptions {
    customShadows?: string[];
  }
}

const customShadows = ['0px 8px 28px 0px #0105114D', '0px 2px 4px 0px #01051133'];

export default customShadows;
