import { Routes, Route } from 'react-router-dom';

import { AtualizarPizzas } from '../pages/AtualizarPizzas';

// Aqui estamos importando nossa nova página
import { CadastrarPizzas } from '../pages/CadastrarPizzas';

import { MostrarPizzas } from '../pages/MostrarPizzas';

export function Router(){
  return (
    <Routes>
      <Route path="/" element={<MostrarPizzas />}/>
      <Route path="/cadastrar" element={<CadastrarPizzas />}/>
      <Route path="/atualizar" element={<AtualizarPizzas />}/>

    </Routes>
  );
}