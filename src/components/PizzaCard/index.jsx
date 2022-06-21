import React from 'react';

import './styles.scss';


export function PizzaCard({ pizza }) { //não sei onde está a informação do $
  return (
  <div className='card'>
    <img
    src={pizza.image}
//    alt={`Imagem de ${flavor}`}
    />


 <div className="flavors">
    <h2>{pizza.flavor}</h2>
    <p className="ingredients">{pizza.ingredients}</p>
    <span className="value">{pizza.value}</span>    
 </div>
 </div>
 );
 }