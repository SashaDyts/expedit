import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import { isLoading } from 'redux/auth/auth-selectors';
import styled from 'styled-components';

import Layout from './Layout';
import {
  LoginPage,
  AddShopPage,
  ShopsPage,
  HomePage,
  NotFoundPage,
} from 'pages';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import { fetchCurrentUser } from 'redux/auth/auth-operations';

export const App = () => {
  const dispatch = useDispatch();
  const isFetching = useSelector(isLoading);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    !isFetching && (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />

          <Route element={<PublicRoute />}>
            <Route path="/login" element={<LoginPage />} />
          </Route>

          <Route element={<PrivateRoute />}>
            <Route path="/all-shops" element={<ShopsPage />} />
            <Route path="/add-shop" element={<AddShopPage />} />
          </Route>
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    )
  );
};

export const Container = styled.div`
  /* margin: 0 auto;
  padding-left: 15px;
  padding-right: 15px;

  width: 1200px; */

  width: 320px;
  padding-left: 10px;
  padding-right: 10px;
  margin-left: auto;
  margin-right: auto;

  // @media screen and (min-width: 480px) {
  //   width: 320px;
  // }

  @media screen and (min-width: 768px) {
    width: 744px;
    padding-left: 20px;
    padding-right: 20px;
  }

  @media screen and (min-width: 1280px) {
    width: 1256px;
  }
`;
