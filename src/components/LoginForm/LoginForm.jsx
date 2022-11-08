import React from 'react';

import useForm from 'hooks/useForm';
import { initialState } from './initial-state';

const LoginForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });

  const { password, name } = state;

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Ім'я
        <input
          type="text"
          name="name"
          onChange={handleChange}
          value={name}
          required
          autoComplete="off"
        />
      </label>
      <label>
        Пароль
        <input
          type="text"
          name="password"
          onChange={handleChange}
          value={password}
          required
          autoComplete="off"
        />
      </label>

      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
