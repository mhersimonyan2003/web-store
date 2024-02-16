import React from 'react';
import { useTranslation } from 'react-i18next';
import { Alert } from '@mui/material';
import { useAppDispatch, useAppSelector } from '@/store';
import { alertsActions, alertsSelectors } from '@/store/alerts';

import s from './index.module.scss';

export const Alerts: React.FC = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'alerts' });
  const alerts = useAppSelector(alertsSelectors.get);
  const dispatch = useAppDispatch();

  const closeAlert = (alertId: string) => {
    dispatch(alertsActions.remove(alertId));
  };

  return (
    <div className={s.alerts}>
      {alerts.map(({ severity, message, id }) => (
        <Alert variant="filled" severity={severity} onClose={() => closeAlert(id)} key={id}>
          {t(message)}
        </Alert>
      ))}
    </div>
  );
};
