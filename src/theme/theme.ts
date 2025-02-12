import { createTheme } from '@mui/material/styles';
import type {} from '@mui/x-data-grid/themeAugmentation';
import type {} from '@mui/x-date-pickers/themeAugmentation';
import palette from './palette';
import typography from './typography';
import customShadows from './shadows';
import Button from './components/button/Button';
import ButtonBase from './components/button/ButtonBase';
import IconButton from './components/button/IconButton';
import Toolbar from './components/button/Toolbar';
import Chip from './components/data-display/Chip';
import Divider from './components/data-display/Divider';
import DataGrid from './components/data-grid/DataGrid';
import MonthCalendar from './components/date-picker/MonthCalendar';
import YearCalendar from './components/date-picker/YearCalendar';
import TextField from './components/inputs/TextField';
import InputBase from './components/inputs/InputBase';
import FilledInput from './components/inputs/FilledInput';
import OutlinedInput from './components/inputs/OutlinedInput';
import InputAdornment from './components/inputs/InputAdornment';
import FormControlLabel from './components/inputs/FormControlLabel';
import Checkbox from './components/inputs/Checkbox';
import Stack from './components/layout/Stack';
import List from './components/list/List';
import ListItemText from './components/list/ListItemText';
import ListItemIcon from './components/list/ListItemIcon';
import ListItemButton from './components/list/ListItemButton';
import Collapse from './components/list/Collapse';
import MenuItem from './components/list/MenuItem';
import Link from './components/navigation/Link';
import Drawer from './components/navigation/Drawer';
import PaginationItem from './components/pagination/PaginationItem';
import Paper from './components/surfaces/Paper';
import CssBaseline from './components/utils/CssBaseline';

export const theme = createTheme({
  typography,
  palette,
  components: {
    MuiButton: Button,
    MuiButtonBase: ButtonBase,
    MuiIconButton: IconButton,
    MuiToolbar: Toolbar,
    MuiChip: Chip,
    MuiDivider: Divider,
    MuiDataGrid: DataGrid,
    MuiMonthCalendar: MonthCalendar,
    MuiYearCalendar: YearCalendar,
    MuiTextField: TextField,
    MuiInputBase: InputBase,
    MuiFilledInput: FilledInput,
    MuiOutlinedInput: OutlinedInput,
    MuiInputAdornment: InputAdornment,
    MuiFormControlLabel: FormControlLabel,
    MuiCheckbox: Checkbox,
    MuiStack: Stack,
    MuiList: List,
    MuiMenuItem: MenuItem,
    MuiListItemText: ListItemText,
    MuiListItemIcon: ListItemIcon,
    MuiListItemButton: ListItemButton,
    MuiCollapse: Collapse,
    MuiLink: Link,
    MuiDrawer: Drawer,
    MuiPaginationItem: PaginationItem,
    MuiPaper: Paper,
    MuiCssBaseline: CssBaseline,
  },
  customShadows,
  spacing: 8,
});
