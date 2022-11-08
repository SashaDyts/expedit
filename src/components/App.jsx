import React from 'react';

import Menu from './Menu';
import { LoginPage, AddShopPage } from 'pages';

export const App = () => {
  return (
    <>
      <Menu />
      <LoginPage />
      <AddShopPage />
    </>
  );
};
