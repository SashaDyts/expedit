import React from 'react';
import styled from 'styled-components';

import ShopsListItem from 'components/ShopsListItem';

const ShopsList = ({ shops }) => {
  return (
    <ul>
      {shops.map(shop => {
        console.log(shop.coords);
        return (
          <Li key={shop._id}>
            <ShopsListItem shop={shop} />
          </Li>
        );
      })}
    </ul>
  );
};

export default ShopsList;

const Li = styled.li`
  :not(:last-child) {
    margin-bottom: 5px;
  }
`;
