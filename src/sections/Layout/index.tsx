import React, { ReactNode } from 'react';
import { Header } from './Header';
import Footer from './Footer';
import { Alerts } from './Alerts';

import s from './index.module.scss';

interface Props {
  children: ReactNode;
}

export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className={s.layout}>
      <Header />
      <main className={s.layout__body}>{children}</main>
      <Footer />
      <Alerts />
    </div>
  );
};
