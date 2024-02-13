import React, { useState } from 'react';
import { AuthFormType } from './types';
import { LoginForm } from './LoginForm';
import { RegisterForm } from './RegisterForm';

export const AuthForm: React.FC = () => {
  const [formType, setFormType] = useState<AuthFormType>(AuthFormType.login);

  const switchForm = () => {
    setFormType((formType) => (formType === AuthFormType.login ? AuthFormType.register : AuthFormType.login));
  };

  return formType === AuthFormType.login ? (
    <LoginForm switchForm={switchForm} />
  ) : formType === AuthFormType.register ? (
    <RegisterForm switchForm={switchForm} />
  ) : null;
};
