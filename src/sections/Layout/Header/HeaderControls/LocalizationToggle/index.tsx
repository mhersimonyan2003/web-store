import React from 'react';
import { Language, useLocalizationContext } from '@/localization';
import RuIcon from '@/icons/ru.png';
import EngIcon from '@/icons/eng.png';

import s from './index.module.scss';

export const LocalizationToggle: React.FC = () => {
  const { language, toggleLanguage } = useLocalizationContext();

  return (
    <img
      src={language === Language.ru ? RuIcon : EngIcon}
      onClick={toggleLanguage}
      className={s['localization-toggle']}
    />
  );
};
