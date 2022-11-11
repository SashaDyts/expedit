import React, { useState, useEffect } from 'react';

import { Container } from 'components/App';
import ShopsList from 'components/ShopsList';

import { getShops } from 'api/shops';

const ShopsPage = () => {
  const [state, setState] = useState({
    items: [],
    loading: false,
    error: null,
  });

  useEffect(() => {
    const fetchShops = async () => {
      setState(
        {
          ...state,
          loading: true,
          error: null,
        },
        [state]
      );

      try {
        const res = await getShops();
        setState(prevState => {
          return { ...prevState, items: [...prevState.items, ...res] };
        });
      } catch (error) {
        setState({
          ...state,
          error,
        });
        console.log(error.response.data.message);
      } finally {
        setState(prevState => {
          return { ...prevState, loading: false };
        });
      }
    };

    fetchShops();
  }, []);

  return (
    <Container>
      <ShopsList shops={state.items} />
    </Container>
  );
};

export default ShopsPage;
