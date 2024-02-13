import React from 'react';
import { FormControl, InputLabel, MenuItem, Select as MuiSelect } from '@mui/material';
import type { SelectProps as MuiSelectProps } from '@mui/material';
import { Option } from './types';

import s from './index.module.scss';

interface Props extends Omit<MuiSelectProps, 'name' | 'defaultValue'> {
  label: string;
  options: Array<Option>;
  helperText?: string;
}

export const Select = React.forwardRef<HTMLSelectElement, Props>(({ label, options, helperText, ...rest }, ref) => {
  return (
    <div className={s['select-wrapper']}>
      <FormControl fullWidth>
        <InputLabel>{label}</InputLabel>
        <MuiSelect label={label} ref={ref} {...rest}>
          {options.map(({ key, value }) => (
            <MenuItem value={value} key={key}>
              {key}
            </MenuItem>
          ))}
        </MuiSelect>
        {Boolean(helperText) && <p className={s.select__error}>{helperText}</p>}
      </FormControl>
    </div>
  );
});

Select.displayName = 'Select';
