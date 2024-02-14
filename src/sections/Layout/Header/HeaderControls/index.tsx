import React from 'react';
import { LocalizationToggle } from './LocalizationToggle';
import { ThemeToggle } from './ThemeToggle';
import { AuthControl } from './AuthControl';

import s from './index.module.scss';

export const HeaderControls: React.FC = () => {
  return (
    <div className={s.header__controls}>
      <LocalizationToggle />
      <ThemeToggle />
      <AuthControl />
    </div>
  );
};
