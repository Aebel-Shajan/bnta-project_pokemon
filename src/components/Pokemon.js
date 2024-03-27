import React from "react";

const Pokemon = ({ pokemon }) => {

  const typesElements = pokemon.types.map((type, index) => {
    return <li>{type}</li>
  })
  const movesElements = pokemon.moves.map((move, index) => {
    return <li>{move}</li>
  })

  return (
    <div >
      <h3>{pokemon.name}</h3>
      <p>Stat: {pokemon.baseStat}</p>
      <img alt="pokemon" src={pokemon.imageSrc} />
      
      <p>Types</p>
      <ul>
        {typesElements}
      </ul>
      
      <p>Moves</p>
      <ul>
        {movesElements.slice(0, 4)}
      </ul>
      
    </div>
  );
};

export default Pokemon;