import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';

const ListItemText: Components<Omit<Theme, 'components'>>['MuiListItemText'] = {
  styleOverrides: {
    root: {},
    primary: ({ theme }) => ({
      marginTop: theme.spacing(0.15),
      color: theme.palette.text.secondary,
      fontSize: theme.typography.subtitle1.fontSize,
      fontWeight: 400,
    }),
  },
};

export default ListItemText;
