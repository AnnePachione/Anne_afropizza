import React from 'react';

import { usePizza } from '../../hooks/usePizza';

import './styles.scss';


export function Button({ title }) {
  const {pizza, verPizza} = usePizza ()

  async function handleChangeCardapio() {
    verPizza(title)
  }

return (
  <button onClick={handleChangeCardapio}>
   {title}
  </button>
)
}