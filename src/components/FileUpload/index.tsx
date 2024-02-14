import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, IconButton } from '@mui/material';
import DoneIcon from '@mui/icons-material/Done';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
import { uploadFile } from '@/api/file';

import s from './index.module.scss';

interface Props {
  setValue: (photoSrc: string) => void;
}

export const FileUplaod = React.forwardRef<HTMLInputElement, Props>((props, ref) => {
  const { t } = useTranslation('translation', { keyPrefix: 'components.fileUpload' });
  const { setValue, ...inputProps } = props;
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const onChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoading(true);

    try {
      const [file] = e.target.files;
      const { url } = await uploadFile(file);
      setSuccess(true);
      setError(false);

      setValue(url);
    } catch (err) {
      setSuccess(false);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const iconConditon = loading || success || error;

  return (
    <div className={s['file-upload']}>
      <Button variant="contained" component="label">
        {t('upload')}
        <input type="file" {...inputProps} ref={ref} hidden onChange={onChange} />
      </Button>
      {iconConditon && (
        <IconButton color={loading ? 'primary' : success ? 'success' : error ? 'error' : 'default'}>
          {loading ? <HourglassBottomIcon /> : success ? <DoneIcon /> : error ? <ErrorOutlineIcon /> : null}
        </IconButton>
      )}
    </div>
  );
});

FileUplaod.displayName = 'FileUplaod';
