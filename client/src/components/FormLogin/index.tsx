import React from 'react';
import { Link } from 'react-router-dom';
import { Container, DivLogo, LinkButton } from './styles';
import Logo from '../../assets/logo-trybe.jpg';

function FormLogin() {
  return (
    <Container>
      <DivLogo>
        <h1>Minha rotina</h1>
        <img src={Logo} alt="" />
      </DivLogo>
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
        <LinkButton /* className={ disabled ? 'disabledLink' : '' } */ to="/home">
          Entrar
        </LinkButton>
      </form>
      <div>
        <p>Ainda não é membro? Cadastre-se
          {' '}
          <Link /* className={ disabled ? 'disabledLink' : '' } */ to="/cadastro">
            aqui
          </Link>
        </p>
      </div>
    </Container>
  );
}

export default FormLogin;