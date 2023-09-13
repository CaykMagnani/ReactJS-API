import React, { useEffect, useState } from 'react';
import '../style.css';

function PreVisualPokemon(props) {
  const [pokemon, setPokemon] = useState(null);

  function loadAPI() {
    let url = 'https://pokeapi.co/api/v2/pokemon/' + props.linkPokemon;
    fetch(url)
      .then((Response) => Response.json())
      .then((json) => {
        setPokemon(json);
      })
      .catch((err) => {
        console.log(err);
        setPokemon(null); 
      });
  }

  useEffect(() => {
    loadAPI();
  }, [props.linkPokemon]);

  return (
    <div className='container'>
      {pokemon ? (
        <div>
          <div>
          <img src={pokemon.sprites?.front_default} alt={pokemon.name} /> 
          <img src={pokemon.sprites?.back_default} alt={pokemon.name} />
          </div>
          <div className='infospoke'>
          <div>Nome: {pokemon.name}</div>
          <div>Número: {pokemon.id}</div>
          <div>Peso: {pokemon.weight / 10}</div>
          <div>Altura: {pokemon.height}</div>
          </div>
        </div>
      ) : (
        <p>Carregando...</p>
      )}
    </div>
  );
}

export default PreVisualPokemon;
