import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';

const DataGrid: Components<Omit<Theme, 'components'>>['MuiDataGrid'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      border: 'none',
      '--DataGrid-rowBorderColor': 'transparent',
      '&:hover, &:focus': {
        '*::-webkit-scrollbar, *::-webkit-scrollbar-thumb': {
          visibility: 'visible',
        },
        '*::-webkit-scrollbar-thumb': {
          background: theme.palette.info.darker,
        },
      },
      '& .MuiDataGrid-scrollbar--vertical': {
        visibility: 'hidden',
      },
      '& .MuiDataGrid-filler': {
        height: '0 !important',
      },
      '& .MuiDataGrid-scrollbarFiller': {
        minWidth: 0,
      },
    }),
    virtualScroller: {
      overflowY: 'hidden',
    },
    columnHeaders: ({ theme }) => ({
      padding: theme.spacing(0, 2),
    }),
    columnHeader: ({ theme }) => ({
      background: theme.palette.info.main,
      '&:focus-within': {
        outline: 'none !important',
      },
    }),
    columnHeaderTitle: ({ theme }) => ({
      fontSize: theme.typography.caption.fontSize,
      letterSpacing: 0.5,
      fontWeight: 600,
    }),
    row: ({ theme }) => ({
      padding: theme.spacing(0, 2),
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.info.dark,
      },
      '&.MuiDataGrid-row--editing': {
        background: theme.palette.secondary.darker,
        '& .MuiDataGrid-cell': {
          background: theme.palette.secondary.darker,
        },
      },
    }),
    cell: ({ theme }) => ({
      color: theme.palette.text.primary,
      fontSize: theme.typography.caption.fontSize,
      '&:hover': {
        cursor: 'pointer',
      },
      '&:focus-within': {
        outline: 'none !important',
      },
      '& .MuiDataGrid-actionsCell': {
        gap: 0,
      },
    }),
    footerContainer: ({ theme }) => ({
      paddingTop: theme.spacing(3),
      border: 0,
      borderTop: 1,
      borderStyle: 'solid',
      borderColor: `${theme.palette.info.darker} !important`,
    }),
    columnSeparator: {
      display: 'none',
    },
    selectedRowCount: {
      display: 'none',
    },
    sortIcon: ({ theme }) => ({
      color: theme.palette.text.secondary,
    }),
    menuIconButton: ({ theme }) => ({
      color: theme.palette.text.secondary,
    }),
    overlay: ({ theme }) => ({
      backgroundColor: theme.palette.info.dark,
    }),
  },
};

export default DataGrid;
