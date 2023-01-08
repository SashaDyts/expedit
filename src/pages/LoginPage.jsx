import React from 'react';
import { Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { getAuthError, isAuth, isLoading } from 'redux/auth/auth-selectors';
import { login } from 'redux/auth/auth-operations';

import LoginForm from 'components/LoginForm';
import { Container } from 'components/App';

const LoginPage = () => {
  const dispatch = useDispatch();

  const error = useSelector(getAuthError);
  const isLogin = useSelector(isAuth);
  const loading = useSelector(isLoading);

  const onLogin = data => {
    dispatch(login(data));
  };

  if (isLogin) {
    return <Navigate to="/all-shops" />;
  }

  return (
    <Container>
      <LoginForm onSubmit={onLogin} />
      {loading && <p>Loading...</p>}
      {error && <p>{error.message}</p>}
    </Container>
  );
};

export default LoginPage;
