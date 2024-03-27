import React from "react";
import './Pokemon.css';

const Pokemon = ({ pokemon }) => {
  const pokemonTypes = pokemon.types;
  const pokemonMoves = pokemon.moves;
  
  const typesElements = pokemonTypes.map((type, index) => {
    return <li key={index}>{type.type.name}</li>;
  });
  const movesElements = pokemonMoves.map((move, index) => {
    return <li key={index}>{move.move.name}</li>;
  });

  return (
    <div className="PokemonCard">
      <h3>{pokemon.name}</h3>
      <p>Stat: {pokemon.stats[0].base_stat}</p>
      <img className="PokemonImage" alt="pokemon" src={pokemon.sprites.front_default} />
      
      <p>Types</p>
      <ul className="PokemonTypes">
        {typesElements.slice(0, 4)}
      </ul>
      
      <p>Moves</p>
      <ul className="PokemonMoves">
        {movesElements.slice(0, 4)}
      </ul>
      
    </div>
  );
};

export default Pokemon;
