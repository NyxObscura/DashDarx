import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';

const MenuItem: Components<Omit<Theme, 'components'>>['MuiMenuItem'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      transition: 'all 0.3s ease-in-out',
      '&:hover': {
        backgroundColor: theme.palette.info.dark,
      },
    }),
  },
};

export default MenuItem;
