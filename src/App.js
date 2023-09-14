import React, { useState } from 'react';
import './App.css';
import PreVisualPokemon from './components/PreVisualPokemon.js';
import './style.css';

function App() {
  const [valorInputTemp, setValorInputTemp] = useState(''); 

  const handleSubmit = (e) => {
    e.preventDefault();
    setValorInput(valorInputTemp);
  }

  const [valorInput, setValorInput] = useState(''); 

  return (
    <div>
      <header>
        <strong>API Que Eu Ainda Não Decidi</strong>
      </header>
      <div className='container'>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Pesquise Seu Pokemon"
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
