import React from "react";

const Pokemon = ({ pokemon }) => {
  const pokemonTypes = pokemon.types;
  const pokemonMoves = pokemon.moves;
  
  const typesElements = pokemonTypes.map((type, index) => {
    return <li>{type.type.name}</li>
  })
  const movesElements = pokemonMoves.map((move, index) => {
    return <li>{move.move.name}</li>
  })

  return (
    <div >
      <h3>{pokemon.name}</h3>
      <p>Stat: {pokemon.stats[0].base_stat}</p>
      <img alt="pokemon" src={pokemon.sprites.front_default} />
      
      <p>Types</p>
      <ul>
        {typesElements.slice(0, 4)}
      </ul>
      
      <p>Moves</p>
      <ul>
        {movesElements.slice(0, 4)}
      </ul>
      
    </div>
  );
};

export default Pokemon;