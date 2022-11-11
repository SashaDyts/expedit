import React from 'react';
// import styled from 'styled-components';
// import Mapa from 'components/Mapa';

const ShopsListItem = ({ shop }) => {
  return (
    <>
      <p>Назва магазину : {shop.name}</p>
      <p>
        coords: {shop.coords.lat} {shop.coords.lon}
      </p>
      <br />
    </>
  );
};

export default ShopsListItem;
