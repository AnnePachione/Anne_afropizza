
import { PizzaCard } from '../../components/PizzaCard';
import '../../styles/global.scss';
import '../../styles/app.scss';
import './styles.scss';


const pizzas = [
    {
     flavor: 'Quatro queijos',
     ingredients: 'Provolone, mussarela, parmesão e gorgonzola.',
     value: 'R$ 79,90',
     image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    },
  
    {
      flavor: 'Pepperoni',
      ingredients: 'Mussarela, parmesão e pepperoni.',
      value: 'R$ 59,90',
      image: 'https://images.unsplash.com/photo-1590133728822-cc311f9c280f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80',
     },
  
     {
      flavor: 'Margherita',
      ingredients: 'Mussarela, tomate e manjericão.',
      value: 'R$ 49,90',
      image: 'https://images.unsplash.com/photo-1600028068383-ea11a7a101f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
     },
  
     {
      flavor: 'Queijo com azeitonas',
      ingredients: 'Mussarela e azeitonas.',
      value: 'R$ 49,90',
      image: 'https://images.unsplash.com/photo-1571066811602-716837d681de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=268&q=80',
     },
  ]

  export function MostrarPizzas() {
	//const { pizza, cadastrarPizza } = usePizza(); //tá certo isso??? // está diferente do material no mesmo local que o anterior
//se eu colocar pizzas, igual o {pizza.map} o site dá erro. POr que?

return ( // esse trecho vai nas outras páginas - até a </div>
    <div className="app"> 
  
    <section className="cardapio">
       <div>
         <h1>Cardápio</h1>
        </div> 
        
  
  <div className="card-container">
    {pizzas.map(pizza => (
    <PizzaCard key={pizza.id} pizza={pizza} />
  ))} 
      </div> 
     </section>
    </div>
    );
}