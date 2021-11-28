import React from 'react';
import AreaConteudo from '../../components/AreaConteudo';
import Header from '../../components/Header';
import { Container } from './styles';

function Home() {
  return (
    <Container>
      <Header />
      <AreaConteudo />
    </Container>
  );
}

export default Home;
