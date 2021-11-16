import React from 'react';
import FormLogin from '../../components/FormLogin';
import { Container, ContainerForm } from './styles';

function Login() {
  return (
    <Container>
      <ContainerForm>
        <FormLogin />
      </ContainerForm>
    </Container>
  );
}

export default Login;