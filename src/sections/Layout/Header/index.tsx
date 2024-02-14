import React from 'react';
import { Logo } from '@/components';
import { Navbar } from './Navbar';
import { HeaderControls } from './HeaderControls';

import s from './index.module.scss';

export const Header: React.FC = () => {
  return (
    <div className={s.header}>
      <Logo />
      <Navbar />
      <HeaderControls />
    </div>
  );
};
