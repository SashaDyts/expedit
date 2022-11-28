import React from 'react';
import styled from 'styled-components';

import Menu from 'components/Header/Menu';
import { Container } from 'components/App';

const Header = () => {
  return (
    <HeaderStyled>
      <HeaderContainer>
        <Container>
          <Menu />
        </Container>
      </HeaderContainer>
    </HeaderStyled>
  );
};

export default Header;

const HeaderStyled = styled.header``;

const HeaderContainer = styled.div`
  /* display: flex;
  align-items: center; */

  height: 70px;
  /* background-color: red; */
`;
