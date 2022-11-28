import React from 'react';
import styled from 'styled-components';

import ShopsListItem from 'components/ShopsListItem';

const ShopsList = ({ shops, onRemoveShop }) => {
  return (
    <List>
      {shops.map(shop => {
        return (
          <Li key={shop._id}>
            <ShopsListItem shop={shop} removeShop={onRemoveShop} />
          </Li>
        );
      })}
    </List>
  );
};

export default ShopsList;

const List = styled.ul`
  margin-top: 20px;
`;

const Li = styled.li`
  :not(:last-child) {
    margin-bottom: 5px;
  }
`;
