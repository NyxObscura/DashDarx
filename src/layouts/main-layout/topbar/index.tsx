import { fontFamily } from 'theme/typography';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Tooltip from '@mui/material/Tooltip';
import Toolbar from '@mui/material/Toolbar';
import ButtonBase from '@mui/material/ButtonBase';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import IconifyIcon from 'components/base/IconifyIcon';
import Image from 'components/base/Image';
import LogoImg from 'assets/images/Logo.png';
import LanguageSelect from './LanguageSelect';
import ProfileMenu from './ProfileMenu';

interface TopbarProps {
  isClosing: boolean;
  mobileOpen: boolean;
  setMobileOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Topbar = ({ isClosing, mobileOpen, setMobileOpen }: TopbarProps) => {
  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  return (
    <Stack alignItems="center" justifyContent="space-between" mb={{ xs: 0, lg: 1 }}>
      <Stack spacing={2} alignItems="center">
        <Toolbar sx={{ display: { xm: 'block', lg: 'none' } }}>
          <IconButton
            size="medium"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerToggle}
          >
            <IconifyIcon icon="mingcute:menu-line" />
          </IconButton>
        </Toolbar>

        <ButtonBase
          component={Link}
          href="/"
          disableRipple
          sx={{ display: { xm: 'block', lg: 'none' } }}
        >
          <Image src={LogoImg} alt="logo" height={24} width={24} />
        </ButtonBase>

        <Typography
          variant="h5"
          fontWeight={600}
          letterSpacing={1}
          fontFamily={fontFamily.workSans}
          display={{ xs: 'none', lg: 'block' }}
        >
          Analytics
        </Typography>
      </Stack>

      <Stack spacing={1} alignItems="center">
        <LanguageSelect />

        <Tooltip title="Notifications">
          <IconButton size="large" sx={{ color: 'text.secondary' }}>
            <IconifyIcon icon="ion:notifications" />
          </IconButton>
        </Tooltip>

        <ProfileMenu />
      </Stack>
    </Stack>
  );
};

export default Topbar;
