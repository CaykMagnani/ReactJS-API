import React from 'react';
import './App.css';
import PreVisualPokemon from './components/PreVisualPokemon.js';
import './style.css'

function App() {
  return (
    <div>
      <header>
        <strong>Pokemon API</strong>
      </header>
      <PreVisualPokemon />
    </div>
  );
}

export default App;
