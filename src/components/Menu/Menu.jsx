import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Головна</Link>
        </li>
        <li>
          <Link to="/login">Увійти</Link>
        </li>
        <li>
          <Link to="/add">Додати точку</Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
