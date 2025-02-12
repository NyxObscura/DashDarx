import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';

const IconButton: Components<Omit<Theme, 'components'>>['MuiIconButton'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      marginLeft: 0,
      color: theme.palette.text.secondary,
    }),
    sizeLarge: ({ theme }) => ({
      fontSize: theme.typography.h5.fontSize,
      padding: theme.spacing(1),
    }),
    sizeMedium: ({ theme }) => ({
      fontSize: theme.typography.h6.fontSize,
      padding: theme.spacing(0.75),
    }),
    sizeSmall: ({ theme }) => ({
      fontSize: theme.typography.button.fontSize,
      padding: theme.spacing(0.5),
    }),
  },
};

export default IconButton;
