import React from 'react';
import styled from 'styled-components';

import getStr from 'helpers';

const ShopsListItem = ({ shop }) => {
  return (
    <StyledLi>
      <p>Назва магазину : {shop.name}</p>
      <p>Підприємець : {shop.shopOwner}</p>
      {/* <p>Примітки : {shop.notes}</p> */}
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
    </StyledLi>
  );
};

export default ShopsListItem;

const StyledLi = styled.div`
  padding: 5px;

  border: 1px solid;
`;
