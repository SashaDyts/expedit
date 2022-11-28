import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import LoginForm from 'components/LoginForm';

// import { login } from 'api/auth';
import { getAuthError } from 'redux/auth/auth-selectors';
import { login } from 'redux/auth/auth-operations';
import { Container } from 'components/App';

const LoginPage = () => {
  const dispatch = useDispatch();

  const error = useSelector(getAuthError);
  console.log(error);

  const onLogin = data => {
    dispatch(login(data));
  };

  return (
    <Container>
      <LoginForm onSubmit={onLogin} />
      {error && <p>{error.message}</p>}
    </Container>
  );
};

export default LoginPage;
