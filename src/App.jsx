//import React, { useContext } from 'react';
import React, { useEffect } from 'react';
//tira ou continua? no material está diferente - criando nosso hook

import { Navbar } from './components/Navbar';
import { Router } from './Routes'

import './styles/global.scss';
import './/components/Navbar/styles.scss';
import './styles/app.scss';


//import './styles/pizzas.scss';

//export function App() { - coloquei no index.jsx do mostrar pizzas
//	const { pizza, cadastrarPizza } = usePizza(); //tá certo isso??? // está diferente do material no mesmo local que o anterior
//se eu colocar pizzas, igual o {pizza.map} o site dá erro. POr que?

async function onSubmit(data) {
  await fetch  (`http://localhost:3333/cadastar`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },

    body: JSON.stringify(data),
  });
}

//export function App() {
	//const { pizza, cadastrarPizza } = usePizza();
//}

export function App () {
  return (
  <div className="app">
      <Navbar />
      < Router />
  </div>
  )
}

//<div className="card-container">
//{pizzas.map(pizza => (
//<PizzaCard key={pizza.id} pizza={pizza} />
//))} 
//</div>






 
