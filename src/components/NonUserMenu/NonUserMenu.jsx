import React from 'react';

import { ListItem } from 'components/Menu/Menu';
import { NavItem } from 'components/Menu/Menu';

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
