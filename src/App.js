import React, { useState } from 'react';
import './App.css';
import PreVisualPokemon from './components/PreVisualPokemon.js';
import './style.css';

function App() {
  const [valorInputTemp, setValorInputTemp] = useState('charizard'); // Estado temporário

  const handleSubmit = (e) => {
    e.preventDefault();
    setValorInput(valorInputTemp); // Atualize o valorInput apenas quando o botão for clicado
  }

  const [valorInput, setValorInput] = useState(''); // Inicialize com uma string vazia

  return (
    <div>
      <header>
        <strong>Pokemon API</strong>
      </header>
      <div className='container'>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={valorInputTemp} // Use valorInputTemp para exibir no input
            onChange={(e) => setValorInputTemp(e.target.value)} // Atualize valorInputTemp à medida que o usuário digita
          />
          <button type='submit'>Enviar</button>
        </form>
      </div>
      <PreVisualPokemon linkPokemon={valorInput} />
    </div>
  );
}

export default App;
