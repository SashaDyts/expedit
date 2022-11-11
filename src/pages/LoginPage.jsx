import React from 'react';

import LoginForm from 'components/LoginForm';

import { login } from 'api/auth';
import { Container } from 'components/App';

const LoginPage = () => {
  const onLogin = data => {
    login(data);
  };

  return (
    <Container>
      <LoginForm onSubmit={onLogin} />
    </Container>
  );
};

export default LoginPage;
