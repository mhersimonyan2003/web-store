import React from 'react';

import s from './index.module.scss';

export const FooterCopyright: React.FC = () => {
  return <div className={s.footer__copyright}>Copyright © {new Date().getFullYear()} MOIS. All Rights Reserved</div>;
};
