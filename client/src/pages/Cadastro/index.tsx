import React from 'react';
import { Container, DivImgCadastro, LinhaVertical, Wrapper } from './styles';
import ImgLogo from '../../assets/welcome.svg';
import FormCadastro from '../../components/FormCadastro';

function Cadastro() {
  return (
    <Container>
      <Wrapper>
        <DivImgCadastro>
          <h2>Cadastre-se e organize sua rotina com mais tranquilidade!</h2>
          <img src={ImgLogo} alt="welcome" />
        </DivImgCadastro>
        <LinhaVertical />
        <FormCadastro />
      </Wrapper>
    </Container>
  );
}

export default Cadastro;