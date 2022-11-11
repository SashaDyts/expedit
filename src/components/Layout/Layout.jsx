import React from 'react';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';

import Header from 'components/Header';

const Layout = () => {
  return (
    <>
      <Header />

      <MainContainer>
        <Outlet />
      </MainContainer>
    </>
  );
};

export default Layout;

const MainContainer = styled.main`
  padding-top: 30px;
`;
