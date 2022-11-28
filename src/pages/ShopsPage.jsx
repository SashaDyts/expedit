import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Container } from 'components/App';
import ShopsList from 'components/ShopsList';
import ShopSearch from 'components/ShopSearch';

import { getIsLoading, getShops } from 'redux/shops/shops-selectors';
import { fetchShops } from 'redux/shops/shops-operations';

const ShopsPage = () => {
  const [filter, setFilter] = useState('');

  const shops = useSelector(getShops);
  const isLoading = useSelector(getIsLoading);

  const getFilteredShops = () => {
    if (!filter) {
      return shops;
    }

    const normalizedFilter = filter.toLowerCase();

    return shops.filter(shop =>
      shop.shopOwner.toLowerCase().includes(normalizedFilter)
    );
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchShops());
  }, [dispatch]);
  return (
    <Container>
      {isLoading && shops.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <>
          {shops.length < 1 && filter === '' ? (
            <p>Shop list is empty</p>
          ) : (
            <>
              <ShopSearch value={filter} onChange={setFilter} />
              <ShopsList shops={getFilteredShops()} />
            </>
          )}
        </>
      )}
    </Container>
  );
};

export default ShopsPage;
