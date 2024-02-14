import React from 'react';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { IconButton } from '@mui/material';
import { Theme, useThemeContext } from '@/theming';

import s from './index.module.scss';

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useThemeContext();

  const darkMode = theme === Theme.dark;

  return (
    <div className={s['theme-toggle']}>
      <IconButton color={darkMode ? 'warning' : 'default'} onClick={toggleTheme}>
        {theme === Theme.dark ? <LightModeIcon fontSize="large" /> : <DarkModeIcon fontSize="large" />}
      </IconButton>
    </div>
  );
};
