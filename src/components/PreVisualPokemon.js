import React, { useEffect, useState } from 'react';
import '../style.css';

function PreVisualPokemon() {
  const [pokemon, setPokemon] = useState(null); // Inicialize com null em vez de []

  function loadAPI() {
    let url = 'https://pokeapi.co/api/v2/pokemon/ditto';
    fetch(url)
      .then((Response) => Response.json())
      .then((json) => {
        setPokemon(json);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    loadAPI();
  }, []);

  return (
    <div className='container'>
      {pokemon ? ( // Verifique se o pokemon tem valor antes de acessar suas propriedades
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      ) : (
        <p>Carregando...</p> // Exiba uma mensagem de carregamento enquanto os dados estão sendo buscados
      )}
    </div>
  );
}

export default PreVisualPokemon;
