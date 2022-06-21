import React, { createContext, useContext, useState, useEffect } from 'react';

const pizzaContext = createContext({});

export function PizzaProvider ({ children }) {
  const [pizzas, setPizza] = useState ([]);
  const [cadastrarPizza, setCadastrarPizza] = useState('Cadastrar Pizzas')

  useEffect(() => {
    async function fetchData(title) {
      const result = await fetch(`http://localhost:3333/pizzas`);

      const data = await result.json();

      setPizza(data);
      setCadastrarPizza(title)
    }

    fetchData();

  }, []);

  async function verPizzas() {
    const result = await fetch(`http://localhost:3333/pizzas`);

  const data = await result.json();
   
   setPizza(data);
  }
  
  return (
    <pizzaContext.Provider value={{ pizzas, cadastrarPizza, setPizza, verPizzas }}>
      {children}
    </pizzaContext.Provider>
  );
}

export function usePizza() {
  return useContext(pizzaContext);
}




//export function PizzaProvider({ children }) { Isso fica ou sai?
  //return (
    //<pizzaContext.Provider>
    //  {children}
    //</pizzaContext.Provider>
 // );
//}