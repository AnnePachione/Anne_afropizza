import './styles.scss';


export function CadastrarPizzas () {
    return (

        <>
        <header>
            <h1>Cadastrar Pizzas</h1>
        </header>

        <shape>

            <h2>Nome da Pizza:</h2>

            <form>
                <div className= "grid-area">
                    <input label="Nome" placeholder="Digite o nome da pizza" />
                </div>
            </form>

            <h2>Descrição:</h2>

            <form>
                 <div className= "grid-area">
              <input label="Ingredientes" placeholder="Digite os ingredientes da pizza" />
                 </div>
            </form>

            <h2>Imagem:</h2>

            <form>
                 <div className= "grid-area">
              <input label="URL" placeholder="Digite a URL da imagem" />
                 </div>
            </form>

            <h2>Preço:</h2>

            <form>
                 <div className= "grid-area">
              <input label="Preço" placeholder="Digite o valor da pizza" />
                 </div>
            </form>

            <button className='buttonCadastro'>
                Cadastrar Pizza
            </button>

        </shape>


</>
);
}



