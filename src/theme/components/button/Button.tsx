import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';

const Button: Components<Omit<Theme, 'components'>>['MuiButton'] = {
  defaultProps: {
    disableElevation: true,
  },
  styleOverrides: {
    root: ({ theme }) => ({
      color: theme.palette.text.primary,
      borderRadius: theme.shape.borderRadius,
      textTransform: 'initial',
      letterSpacing: 0.5,
      fontWeight: 500,
    }),
    contained: ({ theme }) => ({
      '&.Mui-disabled': {
        color: theme.palette.text.secondary,
        background: theme.palette.text.disabled,
      },
    }),
    outlined: ({ theme }) => ({
      '&.Mui-disabled': {
        color: theme.palette.text.disabled,
        borderColor: theme.palette.text.disabled,
      },
    }),
    text: ({ theme }) => ({
      '&.Mui-disabled': {
        color: theme.palette.text.disabled,
      },
    }),
    containedPrimary: ({ theme }) => ({
      background: `linear-gradient(128.49deg, ${theme.palette.gradients.primary.main} 19.86%, ${theme.palette.gradients.primary.state} 68.34%)`,
      '&:hover': {
        background: `linear-gradient(128.49deg, ${theme.palette.gradients.primary.main} 19.86%, ${theme.palette.gradients.primary.state} 68.34%)`,
      },
    }),
    containedSecondary: ({ theme }) => ({
      background: theme.palette.info.dark,
      '&:hover': { background: theme.palette.info.dark },
    }),
    sizeLarge: ({ theme }) => ({
      padding: theme.spacing(1.25, 2.25),
      fontSize: theme.typography.button.fontSize,
    }),
    sizeMedium: ({ theme }) => ({
      padding: theme.spacing(1, 1.5),
      fontSize: theme.typography.subtitle2.fontSize,
    }),
    sizeSmall: ({ theme }) => ({
      padding: theme.spacing(0.875, 1.15),
      fontSize: theme.typography.caption.fontSize,
    }),
  },
};

export default Button;
