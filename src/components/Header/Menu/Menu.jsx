import React from 'react';
import styled from 'styled-components';

import { NavLink } from 'react-router-dom';
import UserMenu from 'components/Header/Menu/UserMenu';
import NonUserMenu from 'components/Header/Menu/NonUserMenu';

const Menu = () => {
  return (
    <Nav>
      <List>
        <ListItem>
          <NavItem to="/">Головна</NavItem>
        </ListItem>

        <NonUserMenu />
        <UserMenu />
      </List>
    </Nav>
  );
};

export default Menu;

const Nav = styled.nav``;

const List = styled.ul`
  display: flex;
  align-items: center;

  height: 70px;
`;

export const ListItem = styled.li`
  :first-child {
    margin-right: auto;
  }
  :not(:first-child) {
    margin-left: 10px;
  }
`;

export const NavItem = styled(NavLink)`
  text-decoration: none;
  color: #000000;

  font-size: 18px;

  padding-top: 10px;
  padding-bottom: 10px;

  &.active {
    color: #0004ff;
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: #0004ff;
  }

  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;
