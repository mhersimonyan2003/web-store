import React from 'react';
import { useAppSelector } from '@/store';
import { tokenSelectors } from '@/store/token';
import { FooterCheckout } from './FooterCheckout';
import { FooterCopyright } from './FooterCopyright';

import s from './index.module.scss';

export default function Footer() {
  const token = useAppSelector(tokenSelectors.get);

  return (
    <footer className={s.footer}>
      <FooterCopyright />
      {token && <FooterCheckout />}
    </footer>
  );
}
