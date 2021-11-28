import React from 'react';
import getDate from '../../utils/getDate';
import { Container } from './styles';

function Header() {
  return (
    <Container>
      <h2>Olá Andy Silva!</h2>
      <h2>{getDate()}</h2>
    </Container>
  );
}

export default Header;
