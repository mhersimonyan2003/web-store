import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useAppSelector } from '@/store';
import { tokenSelectors } from '@/store/token';
import { navbarItems } from './constants';

import s from './index.module.scss';

export const Navbar: React.FC = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'sections.layout.navbar' });
  const token = useAppSelector(tokenSelectors.get);

  return (
    <nav className={s.navbar}>
      {navbarItems
        .filter(({ withAuth }) => token || !withAuth)
        .map(({ key, href }) => (
          <Link to={href} className={s.navbar__item} key={key}>
            {t(key)}
          </Link>
        ))}
    </nav>
  );
};
