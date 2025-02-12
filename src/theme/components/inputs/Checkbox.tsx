import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';
import CheckBoxBlankIcon from 'components/icons/CheckBoxBlankIcon';
import CheckBoxCheckedIcon from 'components/icons/CheckBoxCheckedIcon';
import CheckBoxIndeterminateIcon from 'components/icons/CheckBoxIndeterminateIcon';

const Checkbox: Components<Omit<Theme, 'components'>>['MuiCheckbox'] = {
  defaultProps: {
    icon: <CheckBoxBlankIcon />,
    checkedIcon: <CheckBoxCheckedIcon />,
    indeterminateIcon: <CheckBoxIndeterminateIcon />,
  },
  styleOverrides: {
    root: ({ theme }) => ({
      color: theme.palette.text.secondary,
    }),
    sizeMedium: ({ theme }) => ({
      '& .MuiSvgIcon-root': {
        fontSize: theme.typography.button.fontSize,
      },
    }),
    sizeSmall: ({ theme }) => ({
      '& .MuiSvgIcon-root': {
        fontSize: theme.typography.caption.fontSize,
      },
    }),
  },
};

export default Checkbox;
