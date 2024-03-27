import React, { useState, useEffect } from "react";
import PokemonList from "../components/PokemonList";
import PokemonForm from "../components/PokemonForm";

const API_URL = "https://pokeapi.co/api/v2/pokemon";

const PokemonContainer = () => {
    const [pokemons, setPokemons] = useState([]);
    const [filteredPokemons, setFilteredPokemons] = useState([]);

return (
    <div>
      <h1>Pokedex</h1>
      <PokemonForm />
      <PokemonList pokemons={filteredPokemons} />
    </div>
  );
}

export default PokemonContainer;
