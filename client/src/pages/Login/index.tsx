import React from 'react';
import FormLogin from '../../components/FormLogin';
import { Container, ImgLogin } from './styles';
import ImgLogo from '../../assets/todo-list.svg';

function Login() {
  return (
    <Container>
      <FormLogin />
      <ImgLogin src={ImgLogo} alt="" />
    </Container>
  );
}

export default Login;