import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';
import simplebar from 'theme/styles/simplebar';
import scrollbar from 'theme/styles/scrollbar';
import echart from 'theme/styles/echart';

const CssBaseline: Components<Omit<Theme, 'components'>>['MuiCssBaseline'] = {
  defaultProps: {},
  styleOverrides: (theme) => ({
    '*, *::before, *::after': {
      margin: 0,
      padding: 0,
    },
    html: {
      scrollBehavior: 'smooth',
    },
    body: {
      fontVariantLigatures: 'none',
      backgroundColor: theme.palette.info.darker,
      ...scrollbar(theme),
    },
    ...simplebar(theme),
    ...echart(),
  }),
};

export default CssBaseline;
