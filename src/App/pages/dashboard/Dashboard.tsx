import React from 'react';
import {Link} from 'react-router-dom';
import { useRef, useContext } from 'react';
import { UsuarioLogadoContext } from '../../shared/contexts';

export const Dashboard = () => {

  const counterRef = useRef({counter: 0});

  const usuarioLogadoContext = useContext(UsuarioLogadoContext);

return (
    <div>

    <p>Dashboard</p>

    <p>{usuarioLogadoContext.nomeDoUsuario}</p>

    <p>Contador: {counterRef.current.counter}</p>

    <button onClick={() => counterRef.current.counter++}>Somar</button>
    <button onClick={() => console.log(counterRef.current.counter++)}>Logar</button>
    
  <Link to="/entrar">Login</Link>

    </div>
);
}