import React from 'react';

import LoginForm from 'components/LoginForm';

import { login } from 'api/auth';

const LoginPage = () => {
  const onLogin = data => {
    login(data);
  };

  return (
    <>
      <LoginForm onSubmit={onLogin} />
    </>
  );
};

export default LoginPage;
