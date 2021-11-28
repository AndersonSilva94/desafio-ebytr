import React from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';
import Cadastro from './pages/Cadastro';
import Home from './pages/Home';
import Login from './pages/Login';

function App() {
  return (
    <>
      <Switch>
        <Route exact path='/' component={Login} />
        <Route exact path='/cadastro' component={Cadastro} />
        <Route exact path='/home' component={Home} />
      </Switch>
    </>
  );
}

export default App;
