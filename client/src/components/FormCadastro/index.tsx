import React from 'react';
import { Container, LinkButton } from './styles';

function FormCadastro() {
  return (
    <Container>
      <form>
        <label htmlFor="name">
          Nome:
          <input
            type="text"
          // onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="email">
          E-mail:
          <input
            type="email"
          // onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="senha">
          Senha:
          <input
            type="password"
          // onChange={ this.handleChange }
          />
        </label>
        <LinkButton /* className={ disabled ? 'disabledLink' : '' } */ to="/home">
          Cadastre-se
        </LinkButton>
      </form>
    </Container>
  );
}

export default FormCadastro;
