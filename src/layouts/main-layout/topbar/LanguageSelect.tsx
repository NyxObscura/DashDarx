import { useState } from 'react';
import Menu from '@mui/material/Menu';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import IconifyIcon from 'components/base/IconifyIcon';

interface Language {
  id: number;
  code: string;
  lang: string;
  flag: string;
}

const languages: Language[] = [
  {
    id: 1,
    code: 'eng',
    lang: 'English',
    flag: 'twemoji:flag-united-kingdom',
  },
  {
    id: 2,
    code: 'en-US',
    lang: 'English (US)',
    flag: 'twemoji:flag-united-states',
  },
  {
    id: 3,
    code: 'ban',
    lang: 'বাংলা',
    flag: 'twemoji:flag-bangladesh',
  },
  {
    id: 4,
    code: 'zh',
    lang: '中文',
    flag: 'twemoji:flag-china',
  },
  {
    id: 5,
    code: 'tr',
    lang: 'Türkçe',
    flag: 'twemoji:flag-turkey',
  },
];

const LanguageSelect = () => {
  const [language, setLanguage] = useState(languages[0]);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleFlagButtonClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleFlagMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLanguageItemClick = (langItem: Language) => {
    setLanguage(langItem);
    handleFlagMenuClose();
  };

  return (
    <>
      <Tooltip title={`${language.lang} - ${language.code}`}>
        <IconButton onClick={handleFlagButtonClick} sx={{ fontSize: 'h4.fontSize' }}>
          <IconifyIcon icon={language.flag} />
        </IconButton>
      </Tooltip>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleFlagMenuClose}
        onClick={handleFlagMenuClose}
        PaperProps={{
          elevation: 0,
          sx: {
            mt: 1.5,
            p: '0 !important',
            width: 240,
            overflow: 'hidden',
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        {languages.map((langItem) => {
          return (
            <MenuItem key={langItem.id} onClick={() => handleLanguageItemClick(langItem)}>
              <ListItemIcon sx={{ mr: 2, fontSize: 'h3.fontSize' }}>
                <IconifyIcon icon={langItem.flag} />
              </ListItemIcon>
              <ListItemText>
                <Typography>{langItem.lang}</Typography>
              </ListItemText>
              <ListItemText>
                <Typography textAlign="right">{langItem.code}</Typography>
              </ListItemText>
            </MenuItem>
          );
        })}
      </Menu>
    </>
  );
};

export default LanguageSelect;
