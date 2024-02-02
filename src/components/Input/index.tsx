import React, { InputHTMLAttributes } from 'react';
import { TextField } from '@mui/material';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = React.forwardRef<HTMLInputElement, Props>((props, ref) => {
  const { error, label, ...inputProps } = props;

  return (
    <TextField
      margin="normal"
      fullWidth
      label={label}
      error={Boolean(error)}
      helperText={error ? error : null}
      ref={ref}
      {...inputProps}
      color="info"
      size="medium"
    />
  );
});

Input.displayName = 'Input';
