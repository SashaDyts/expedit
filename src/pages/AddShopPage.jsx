import React from 'react';

import ShopAddForm from 'components/ShopAddForm';

import { addShop } from 'api/shops';

const AddShopPage = () => {
  let a;
  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  function success(pos) {
    const crd = pos.coords;
    a = { lat: crd.latitude, lon: crd.longitude };
  }

  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }

  navigator.geolocation.getCurrentPosition(success, error, options);

  const onSubmit = data => {
    console.log({ ...data, coords: a });
    addShop({ ...data, coords: a });
  };

  return (
    <>
      <ShopAddForm onSubmit={onSubmit} />
    </>
  );
};

export default AddShopPage;
