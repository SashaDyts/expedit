import React from 'react';

import styled from 'styled-components';

import { initialState } from './initial-state';
import useForm from 'hooks/useForm';

const ShopAddForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });

  const { name, locality, shopOwner, notes } = state;

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Назва магазину
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
        Населений пункт
        <Input
          type="text"
          name="locality"
          onChange={handleChange}
          value={locality}
          required
          autoComplete="off"
        />
      </Label>
      {/* <Label>
        Координати
        <Input
          type="text"
          name="coords"
          onChange={handleChange}
          value={coords}
          required
          autoComplete="off"
        />
      </Label> */}
      <Label>
        Підприємець
        <Input
          type="text"
          name="shopOwner"
          onChange={handleChange}
          value={shopOwner}
          required
          autoComplete="off"
        />
      </Label>
      <Label>
        Замітки
        <Input
          type="text"
          name="notes"
          onChange={handleChange}
          value={notes}
          required
          autoComplete="off"
        />
      </Label>

      <Btn type="submit">Додати магазин</Btn>
    </Form>
  );
};

export default ShopAddForm;

const Form = styled.form`
  display: flex;
  flex-direction: column;

  width: 350px;

  margin: 0 auto;
`;

const Label = styled.label`
  display: flex;
  justify-content: space-between;
  :not(:first-child) {
    margin-top: 10px;
  }
`;

const Input = styled.input`
  /* margin-left: 5px; */
  font-size: 16px;
`;

const Btn = styled.button`
  margin-top: 20px;
  margin-left: 35%;

  width: 150px;
  height: 30px;
`;
