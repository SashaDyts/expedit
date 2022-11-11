import React from 'react';

import ShopsListItem from 'components/ShopsListItem';

const ShopsList = ({ shops }) => {
  return (
    <ul>
      {shops.map(shop => {
        console.log(shop.coords);
        return (
          <li key={shop._id}>
            <ShopsListItem shop={shop} />
          </li>
        );
      })}
    </ul>
  );
};

export default ShopsList;
