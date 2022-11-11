import React from 'react';

import ShopAddForm from 'components/ShopAddForm';

import { addShop } from 'api/shops';
import useGeoPosition from 'hooks/useGeoPosition';
import { Container } from 'components/App';

const AddShopPage = () => {
  const { coords } = useGeoPosition();
  // console.log(coords);

  const onSubmit = async data => {
    addShop({ ...data, coords });
  };

  return (
    <Container>
      <ShopAddForm onSubmit={onSubmit} />
    </Container>
  );
};

export default AddShopPage;
