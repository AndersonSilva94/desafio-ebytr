import React from 'react';
import { Route, Routes as Switch } from 'react-router-dom'
import './App.css';
import Cadastro from './pages/Cadastro';
import Home from './pages/Home';
import Login from './pages/Login';

function App() {
  return (
    <>
      <Switch>
        <Route path='/' element={<Login />} />
        <Route path='/cadastro' element={<Cadastro />} />
        <Route path='/home' element={<Home />} />
      </Switch>
    </>
  );
}

export default App;
