import React from 'react';
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';

import Layout from './Layout';
import {
  LoginPage,
  AddShopPage,
  ShopsPage,
  HomePage,
  NotFoundPage,
} from 'pages';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />

        <Route path="/login" element={<LoginPage />} />

        <Route path="/all-shops" element={<ShopsPage />} />
        <Route path="/add-shop" element={<AddShopPage />} />
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

// const AppContainer = styled.div``;

export const Container = styled.div`
  /* width: 100%; */
  margin: 0 auto;
  padding-left: 15px;
  padding-right: 15px;

  width: 1200px;

  /* background-color: #fac27e; */
`;
