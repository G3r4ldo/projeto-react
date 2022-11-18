import React from 'react';
import {Link} from 'react-router-dom';
import { useRef } from 'react';
import { useUsuarioLogado } from '../../shared/hooks';

export const Dashboard = () => {

  const counterRef = useRef({counter: 0});

  const {nomeDoUsuario} = useUsuarioLogado();

return (
    <div>

    <p>Dashboard</p>

    <p>{nomeDoUsuario}</p>

    <p>Contador: {counterRef.current.counter}</p>

    <button onClick={() => counterRef.current.counter++}>Somar</button>
    
    <button onClick={() => console.log(counterRef.current.counter++)}>Logar</button>
    
  <Link to="/entrar">Login</Link>

    </div>
);
}