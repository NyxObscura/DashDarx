import { useState } from 'react';
import { MenuItem } from 'routes/sitemap';
import Link from '@mui/material/Link';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import IconifyIcon from 'components/base/IconifyIcon';

const ListItem = ({ subheader, icon, path, active }: MenuItem) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <ListItemButton
      component={Link}
      href={path}
      onClick={handleClick}
      sx={{ opacity: active ? 1 : 0.3 }}
    >
      <ListItemIcon>
        {icon && (
          <IconifyIcon
            icon={icon}
            sx={{
              color: active && path === '/' ? 'primary.main' : null,
            }}
          />
        )}
      </ListItemIcon>
      <ListItemText
        primary={subheader}
        sx={{
          '& .MuiListItemText-primary': {
            color: active && path === '/' ? 'primary.main' : null,
          },
        }}
      />
    </ListItemButton>
  );
};

export default ListItem;
