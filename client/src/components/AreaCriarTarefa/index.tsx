import React from 'react';
import { BotaoTarefa, Container, InputTarefa } from './styles';

function AreaCriarTarefa() {
  return (
    <Container>
      <InputTarefa />
      <BotaoTarefa >Inserir Tarefa</BotaoTarefa>
    </Container>
  );
}

export default AreaCriarTarefa;