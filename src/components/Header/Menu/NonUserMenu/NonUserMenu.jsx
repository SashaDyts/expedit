import React from 'react';

import { ListItem } from 'components/Header/Menu/Menu';
import { NavItem } from 'components/Header/Menu/Menu';

const NonUserMenu = () => {
  return (
    <>
      <ListItem>
        <NavItem to="/login">Увійти</NavItem>
      </ListItem>
    </>
  );
};

export default NonUserMenu;
