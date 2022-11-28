import React from 'react';

import styled from 'styled-components';
import useForm from 'hooks/useForm';
import { initialState } from './initial-state';

const LoginForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });

  const { password, name } = state;

  return (
    <From onSubmit={handleSubmit}>
      <Label>
        Ім'я
        <Input
          type="text"
          name="name"
          onChange={handleChange}
          value={name}
          required
          autoComplete="off"
        />
      </Label>
      <Label>
        Пароль
        <Input
          type="text"
          name="password"
          onChange={handleChange}
          value={password}
          required
          autoComplete="off"
        />
      </Label>

      <Button type="submit">Login</Button>
    </From>
  );
};

export default LoginForm;

// @media screen and (min-width: 768px) {
//   width: 744px;
//   padding-left: 20px;
//   padding-right: 20px;
// }

// @media screen and (min-width: 1280px) {
//   width: 1256px;
// }

const From = styled.form`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    /* display: block; */
    width: 300px;
    margin: 0 auto;
  }

  /* @media screen and (min-width: 1280px) {
    width: 1256px;
  } */

  /* justify-content: space-around; */
`;

const Label = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: center;

  :not(:last-child) {
    margin-bottom: 15px;
  }
`;

const Input = styled.input`
  font-size: 16px;
`;

const Button = styled.button`
  width: 100px;
  margin-left: 48%;
  cursor: pointer;
  /* margin: 0 auto; */
`;
