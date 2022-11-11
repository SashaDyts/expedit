import React from 'react';

import { ListItem } from 'components/Menu/Menu';
import { NavItem } from 'components/Menu/Menu';

const UserMenu = () => {
  return (
    <>
      {/* <ListItem>
        <NavItem to="/find-shops">Пошук</NavItem>
      </ListItem> */}
      <ListItem>
        <NavItem to="/all-shops">Всі магазини</NavItem>
      </ListItem>
      <ListItem>
        <NavItem to="/add-shop">Додати точку</NavItem>
      </ListItem>
    </>
  );
};

export default UserMenu;
