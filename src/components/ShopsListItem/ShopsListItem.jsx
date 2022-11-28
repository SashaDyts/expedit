import React from 'react';
import styled from 'styled-components';

import getStr from 'helpers';

const ShopsListItem = ({ shop, removeShop }) => {
  return (
    <StyledLi>
      <p>Назва магазину : {shop.name}</p>
      <p>Підприємець : {shop.shopOwner}</p>
      <p>Пункт розвантаження : {shop.locality}</p>
      {shop.notes.length !== 0 && <p>Примітки : {shop.notes}</p>}

      <br />

      <button type="button">
        <a
          href={getStr(shop.coords.lat, shop.coords.lon)}
          target="_blank"
          rel="noreferrer"
        >
          карта
        </a>
      </button>

      {/* <button
        type="button"
        onClick={() => {
          removeShop(shop.id);
        }}
      >
        Delete
      </button> */}
    </StyledLi>
  );
};

export default ShopsListItem;

const StyledLi = styled.div`
  padding: 5px 5px 5px 20px;
  background-color: #eae1e1;

  border: 1px solid;
  border-radius: 5px;
`;
