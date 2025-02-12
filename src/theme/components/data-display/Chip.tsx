import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';

const Chip: Components<Omit<Theme, 'components'>>['MuiChip'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      margin: 0,
      border: 1,
      borderStyle: 'solid',
      borderRadius: theme.shape.borderRadius / 2,
    }),
    sizeSmall: ({ theme }) => ({
      height: 20,
      fontSize: theme.typography.caption.fontSize,
    }),
    sizeMedium: ({ theme }) => ({
      height: 28,
      fontSize: theme.typography.body1.fontSize,
    }),
    iconSmall: {
      width: 12,
      margin: '0 !important',
    },
    iconMedium: {
      width: 16,
      margin: '0 !important',
    },
    labelSmall: {
      padding: 0,
      textTransform: 'capitalize',
    },
    labelMedium: {
      padding: 0,
      textTransform: 'capitalize',
    },
  },
};

export default Chip;
