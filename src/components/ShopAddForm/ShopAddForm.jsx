import React from 'react';

import styled from 'styled-components';

import { initialState } from './initial-state';
import useForm from 'hooks/useForm';

const ShopAddForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });

  const { name, locality, shopOwner } = state;

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
      {/* <Label>
        Замітки
        <Input
          type="text"
          name="notes"
          onChange={handleChange}
          value={notes}
          required
          autoComplete="off"
        />
      </Label> */}

      <Btn type="submit">Додати магазин</Btn>
    </Form>
  );
};

export default ShopAddForm;

const Form = styled.form`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    /* display: block; */
    width: 300px;
    margin: 0 auto;
  }

  @media screen and (min-width: 768px) {
    width: 400px;
  }

  /* @media screen and (min-width: 1280px) {
    width: 1256px;
  } */

  /* justify-content: space-around; */
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  :not(:last-child) {
    margin-bottom: 15px;
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

const Input = styled.input`
  /* margin-left: 5px; */
  font-size: 16px;

  /* margin-top: 5px; */

  @media screen and (max-width: 768px) {
    margin-top: 5px;
  }
`;

const Btn = styled.button`
  width: 100px;
  margin: 0 auto;
`;
