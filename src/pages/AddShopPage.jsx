import React from 'react';
import { useDispatch } from 'react-redux';

import ShopAddForm from 'components/ShopAddForm';

import { addShop } from 'redux/shops/shops-operations';

// import { addShop } from 'api/shops';
import useGeoPosition from 'hooks/useGeoPosition';
import { Container } from 'components/App';

const AddShopPage = () => {
  const dispatch = useDispatch();
  const { coords } = useGeoPosition();

  const onAddBook = payload => {
    dispatch(addShop({ ...payload, coords }));
    console.log(payload);
  };

  return (
    <Container>
      <ShopAddForm onSubmit={onAddBook} />
    </Container>
  );
};

export default AddShopPage;
