import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from 'components/App';

const NotFoundPage = () => {
  return (
    <Container>
      <p>Сторінки не знайдено</p>
      <Link to="/">На головну</Link>
    </Container>
  );
};

export default NotFoundPage;
