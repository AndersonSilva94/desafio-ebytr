import React from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';
import Cadastro from './pages/Cadastro';
import Login from './pages/Login';

function App() {
  return (
    <>
      <Switch>
        <Route exact path='/' component={Login} />
        <Route exact path='/cadastro' component={Cadastro} />
      </Switch>
    </>
  );
}

export default App;
