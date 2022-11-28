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
