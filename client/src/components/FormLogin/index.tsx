import React, { useEffect, useState, MouseEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { Container, DivLogo, LinkButton } from './styles';
import Logo from '../../assets/logo-trybe.jpg';
import api from '../../services/api';
import validateLogin from '../../utils/validateLogin';

function FormLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disabled, setDisabled] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const { error } = validateLogin({ email, password });
    if (!error) setDisabled(false);
  }, [email, password])

  async function handleClick(e: MouseEvent) {
    e.preventDefault();
    try {
      await api.post('/login', {
        email,
        password
      });
      navigate('/home')

    } catch (err) {
      toast('Informações incorretas')
    }
  }

  return (
    <Container>
      <DivLogo>
        <h1>Minha rotina</h1>
        <img src={Logo} alt="logo" />
      </DivLogo>
      <form>
        <label htmlFor="email">
          E-mail:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label htmlFor="senha">
          Senha:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <LinkButton
          onClick={handleClick}
          type='submit'
          disabled={disabled}
        >
          Entrar
        </LinkButton>
      </form>
      <div>
        <p>Ainda não é membro? Cadastre-se
          {' '}
          <Link to="/cadastro">
            aqui
          </Link>
        </p>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Container>
  );
}

export default FormLogin;