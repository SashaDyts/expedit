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
`;

const Label = styled.label`
  /* margin-bottom: 5px; */
  :not(:first-child) {
    margin-top: 5px;
  }
`;

const Input = styled.input`
  margin-left: 5px;
`;

const Btn = styled.button`
  margin-top: 10px;

  width: 100px;
`;
