import React from 'react';
import { Link } from 'react-router-dom';
import { Container, LinkButton } from './styles';

function FormLogin() {
  return (
    <Container>
      <div>
        <p>Login!</p>
      </div>
      <form>
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
        <LinkButton /* className={ disabled ? 'disabledLink' : '' } */ to="/carteira">
          Entrar
        </LinkButton>
      </form>
      <div>
        <p>Ainda não é membro? Cadastre-se
          {' '}
          <Link /* className={ disabled ? 'disabledLink' : '' } */ to="/carteira">
            aqui
          </Link>
        </p>
      </div>
    </Container>
  );
}

export default FormLogin;