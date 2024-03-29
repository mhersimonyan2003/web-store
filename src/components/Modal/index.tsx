import React, { Dispatch, ReactNode, SetStateAction, useEffect } from 'react';
import { createPortal } from 'react-dom';
import CloseIcon from '@mui/icons-material/Close';

import s from './index.module.scss';
import { IconButton } from '@mui/material';

interface Props {
  container?: HTMLElement;
  title?: string;
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
  children: ReactNode;
}

export const Modal: React.FC<Props> = ({
  container = document.getElementById('wrapper'),
  title,
  visible,
  setVisible,
  children,
}) => {
  useEffect(() => {
    if (visible) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [visible]);

  if (!visible) return null;

  const closeModal = () => {
    setVisible(false);
  };

  return createPortal(
    <div className={s.modal} hidden={!visible}>
      <div className={s.modal__backdrop} />
      <div className={s.modal__card}>
        <div className={s.modal__card__header}>
          {title && <div className={s.modal__card__header__title}>{title}</div>}
          <div className={s.modal__card__close} onClick={closeModal}>
            <IconButton>
              <CloseIcon fontSize="large" />
            </IconButton>
          </div>
        </div>
        {children}
      </div>
    </div>,
    container
  );
};
