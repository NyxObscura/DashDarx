import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';

const PaginationItem: Components<Omit<Theme, 'components'>>['MuiPaginationItem'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      color: theme.palette.neutral.light,
      fontSize: theme.typography.body2.fontSize,
      '&.Mui-selected': {
        background: theme.palette.primary.main,
        '&:hover': {
          background: theme.palette.primary.main,
        },
      },
    }),
  },
};

export default PaginationItem;
