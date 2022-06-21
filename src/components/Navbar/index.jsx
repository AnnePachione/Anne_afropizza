import React from 'react';

import './styles.scss'

import { Button } from '../Button';

export function Navbar() { //??? tá certo isso?
  return (
    <nav className="navbar">
      <h1>AfroPizza</h1>

      <div className="button-container">
       <Button title="Ver Pizzas"/>

       <Button title="Cadastrar Pizzas"/>
     </div>
    </nav>
);
}

