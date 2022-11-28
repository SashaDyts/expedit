import React from 'react';
import styled from 'styled-components';

const ShopSearch = ({ value, onChange }) => {
  return (
    <>
      <label>
        Введіть підприємця
        <Input
          type="text"
          value={value}
          onChange={e => {
            onChange(e.target.value);
          }}
        />
      </label>
    </>
  );
};

export default ShopSearch;

const Input = styled.input`
  font-size: 16px;
`;
